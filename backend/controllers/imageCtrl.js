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
    upload: async (req, res) => {
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

            const response = await S3.upload({
                Bucket: BUCKET_NAME,
                Body: req.files.file.data
            }).promise();

            const imageObj = new Images({ urlLocation: response.Location, isHidden: isHidden, ownerId: mongoose.Types.ObjectId(userId) });
            await imageObj.save();

            res.status(200).json({msg: data.Location});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
}

module.exports = imageCtrl;