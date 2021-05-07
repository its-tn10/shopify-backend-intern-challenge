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
            if (!req.files.file)
                return res.status(400).json({msg: "Oops! It seems like you did not upload a file -- please try again."});
            
            let isHidden = false;
            if (req.body.isHidden)
                isHidden = req.body.isHidden;

            let userId = '';
            if (req.cookies.token) {
                const userObj = await Users.findOne({ username: req.cookies.token });
                if (userObj)
                    userId = userObj._id;
            }

            const imageObj = new Images({ isHidden: isHidden, ownerId: mongoose.Types.ObjectId(userId) });
            await imageObj.save();

            const response = await S3.upload({
                Bucket: BUCKET_NAME,
                Key: imageObj.id,
                Body: req.files.file.data
            }).promise();

            await Images.findByIdAndUpdate({ _id: imageObj._id }, {"urlLocation": response.Location});
            res.status(200).json({msg: response.Location});
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
    }
}

module.exports = imageCtrl;