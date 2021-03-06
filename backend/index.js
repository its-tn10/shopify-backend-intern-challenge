require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

// Setup Express
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload());

// Routes
app.use('/image', require('./routes/imageRouter'));
app.use('/user', require('./routes/userRouter'));

//Connect to MongoDB
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB database!')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Running on port', PORT);
});