const Images = require('../models/imageModel');
const Users = require('../models/userModel');

const mongoose = require('mongoose');

const userCtrl = {
    register: async (req, res) => {
        try {
            const { username } = req.body;
            
            if(!username)
                return res.status(400).json({msg: "Oops! The form you sent in was not complete -- please try again."});

            if(username.length < 3)
                return res.status(400).json({msg: "Oops! Your username is too short -- try making it longer."});

            const userObj = await Users.findOne({ username: username });
            if(userObj) return res.status(400).json({msg: "Unfortunately, an account already exists with the username provided -- please try again."});

            const newUser = new Users({ username: username });
            await newUser.save();

            res.status(200).json({msg: "Success! You have created an account that is ready to upload images!"});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    login: async (req, res) => {
        try {
            const { username } = req.body
            const userObj = await Users.findOne({ username: username });
            if(!userObj) return res.status(400).json({msg: "The provided username does not exist -- try again?"});

            res.status(200).json({msg: "Success! You have logged in to your account!"});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    logout: async (req, res) => {
        try {
            return res.status(200).json({msg: "Success! You have logged out of your account."});
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },
    images: async (req, res) => {
        try {
            const { username } = req.query;
            
            const userObj = await Users.findOne({ username: username });
            if(!userObj) return res.status(400).json({msg: "The provided username does not exist -- try again?"});

            const images = await Images.find({ownerId: mongoose.Types.ObjectId(userObj._id)}).select();

            res.status(200).json(images);
        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    }
}

module.exports = userCtrl;