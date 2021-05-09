const Images = require('../models/imageModel');
const AWS = require('aws-sdk');
const mongoose = require('mongoose');

// AWS S3
const ID = process.env.AWS_ACCESS_KEY_ID;
const SECRET = process.env.AWS_SECRET_ACCESS_KEY;
const TOKEN = process.env.AWS_SESSION_TOKEN;
const BUCKET_NAME = process.env.aws_bucket;

const S3 = new AWS.S3({
    region: 'us-east-1',
    accessKeyId: ID,
    secretAccessKey: SECRET,
    sessionToken: TOKEN
});

S3.createBucket({
    Bucket: BUCKET_NAME
}, function(err, data) {
    if (err) throw err;
    console.log('Created an AWS S3 Bucket:', data.Location);
});

const imageCtrl = {
    uploadImage: async (req, res) => {
        try {
            if (!req.files)
                return res.status(400).json({msg: "Oops! It seems like you did not upload a file -- please try again."});
            
            let isHidden = false;
            if (req.body.isHidden === 'true')
                isHidden = true;

            let userId = '';
            if (req.body.username) {
                const userObj = await Users.findOne({ username: req.body.username });
                if (userObj)
                    userId = userObj.id;
            }
            
            let i = 0;
            let locations = [];

            if (Array.isArray(req.files.files)) {
                for (i = 0; i < req.files.files.length; i++)
                    locations.push(await uploadImage(userId, req.files.files[i].data, isHidden));
            } else {
                locations.push(await uploadImage(userId, req.files.files.data, isHidden));
            }

            res.status(200).json(locations);
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    deleteImage: async (req, res) => {
        try {
            const { imageId } = req.body;
            
            const imageObj = await Images.findOne({ _id: mongoose.Types.ObjectId(imageId) });
            if(!imageObj) return res.status(400).json({msg: "The provided image does not exist -- please try again."});

            let userId = '';
            if (req.cookies.token) {
                const userObj = await Users.findOne({ username: req.cookies.token });
                if (userObj)
                    userId = userObj._id;
            }

            if (imageObj.ownerId != userId) return res.status(400).json({msg: "You do not have permission to delete this image."});
            
            await S3.deleteObject({
                Bucket: BUCKET_NAME,
                Key: imageObj.id
            }).promise();
            await imageObj.remove();

            res.status(200).json({msg: "Success! The image has been deleted."});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }, 
    viewImage: async (req, res) => {
        try {
            const { imageId, username } = req.query;

            const imageObj = await Images.findOne({ _id: imageId });
            if(!imageObj) return res.status(400).json({msg: "The provided image does not exist -- please try again."});

            if (username) {
                const userObj = await Users.findOne({ username: username });
                if (userObj && userObj.id != imageObj.ownerId && imageObj.isHidden) return res.status(400).json({msg: "You do not have sufficient permissions to view this image."});
            }

            S3.getObject({Bucket: BUCKET_NAME, Key: imageId},
                function(error, data) {
                    if (error != null) {
                        throw error;
                    } else {
                        var img = Buffer.from(data.Body, 'base64');
                        res.writeHead(200, {
                            'Content-Type': 'image/png',
                            'Content-Length': data.ContentLength,
                            'Content-Disposition': 'inline;'
                        });
                        res.end(img);       
                    }
                }
            );
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    viewGallery: async (req, res) => {
        try {
            res.status(200).json(await Images.find({isHidden: false}).sort('-uploadDate').select());
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
}

async function uploadImage(userId, file, isHidden = false) {
    let imageObj = null;

    if (userId) imageObj = new Images({ isHidden: isHidden, ownerId: userId });
    else imageObj = new Images({ isHidden: false });
    await imageObj.save();

    const response = await S3.upload({
        Bucket: BUCKET_NAME,
        Key: imageObj.id,
        Body: file
    }).promise();

    await Images.findByIdAndUpdate({ _id: imageObj.id }, {"urlLocation": response.Location});
    return response.Location;
}

module.exports = imageCtrl;