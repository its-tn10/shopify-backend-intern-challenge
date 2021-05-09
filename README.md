# Shopify: Fall 2021 Backend Developer Internship Challenge
## Introduction

Howdy!

This repository is my submission for Shopify's Fall 2021 Backend Developer Internship Challenge, as part of their internship application. It is an application utilized as an image repository that anyone can utilize to add, delete, and view images uploaded around the world. 

It is a back-end oriented project, but I have included a minimal front-end service that can be utilized for QA testing. You can view the front-end service live right now at my website [here](http://shopify.tientavu.com/)! Similarly, the back-end service is also published [here](http://shopify-backend.tientavu.com/).
##  Technologies
The following services were utilized to run the full-stack application:

- **Amazon AWS EC2 servers** to run the front- and back-end services
- **Amazon AWS S3 buckets** to upload, delete, and view images uploaded by users
- **MongoDB Atlas cloud databases** to store basic information of images and users
- **Cloudflare** and **NGINX** to run and publish the application live on my website

For the back-end service, the following technologies were used:

- **Node.js** and **JavaScript**
- **Express.js** for the back-end web service
- **Mongoose** as an Object Document Mapping framework to the MongoDB database
- **Amazon AWS SDK** to connect with the S3 buckets
- **express-fileupload** as a tool to support easy file-uploading procedures
- **CORS** as an Express.js middleware tool for cross-origin resource sharing
- **dotenv** to import environmental variables to the project

For the front-end service, the following technologies were used:
- **Node.js** and **JavaScript**
- **React.js** for the front-end UI service
- **Redux** and **Thunk** for easy state management with **React.js**
- **axios** for back-end API service calls
- **Semantic UI** for styling (I cannot design for my life...)
## Requirements

### Back-end Service
The application was built with Node.js v10.19.0 and npm v6.14.4. An Amazon AWS S3 bucket is required, as well as a MongoDB database and a proper machine to run the front- and back-end services.

Once these preliminary requirements are met, a `.env` file is required in the root directory of the back-end service. They include variables such as `MONGODB_URL`, which pertains to the connection URI of the database, and `PORT`, which specifies what port the back-end service would run on.

Additionally, `aws_bucket` is a required variable for the name of the running AWS S3 bucket, as well as `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`,  and `AWS_SESSION_TOKEN` to connect your AWS account to the SDK. Educators can obtain a free AWS account with credit [here](https://aws.amazon.com/education/awseducate/), which was what I utilized!

Running `npm install` in the `backend/` folder  is required when you first download the repository, and running `node index.js` within the root directory of the `backend/` folder will run the service.
### Front-end service
Similar procedures for the front-end service -- running `npm install` in the `frontend/` folder  is required when you first download the repository, and running `npm start` within the root directory of the `frontend/` folder will run a developmental version of the service. For an optimized build, run `npm run build`.

Be sure to edit `/frontend/src/constants/APIConstants.js` as well, as it contains the URL pointing to the back-end service.
## Features

Out of the box, the application contains...
- Single page front-end service
- Creating and maintaining user accounts to upload, delete, and view images with public and private permissions
- Ability for guests to also upload and view images, but without permissions and deletion features
- Bulk uploading and deletion of images

There are a ton of improvements that could be made, however...

- For simplicity's sake, there were no passwords stored within the application. One could use **Google's API services** for users to login with their Google account, or **BCrypt** to hash passwords. 
- **socket.io** could be utilized for real-time updates on images being uploaded
- The project was built in mind that only a few users would utilize these services, and that **scalability** may be an issue for a large user base
- Also -- for a minimal application, **cookies** and **sessions** were not implemented; users refreshing the page would loose access to their account immediately
- I tried my best to create the project with "Clean Code". 
## Routes
As noted earlier, the back-end service is currently running on http://shopify-backend.tientavu.com/. 

Routes on `/user/`:

- `POST /user/login`: with a `username` parameter provided, responds with a JSON on if a user successfully "logs in"
- `GET/user/logout`: responds with a JSON on if a user successfully "logs out"
- `POST /user/create`: with a `username` parameter provided, responds with a JSON on if a user account is successfully created
- `GET /user/images`: with a `username` parameter provided, responds with a JSON array of image objects containing meta data that were uploaded by the user

Routes on `/image/`:

- `POST /image/upload`: encoded in a `FormData` object, there should be a `files` parameter that provides a `File` object similar to how HTML does file uploading, and this supports multiple files as well; additionally, one could also provide parameters for `isHidden` and `username`
- `POST /image/delete`: encoded in a `FormData` object, there should be a `files` parameter that provides the image id that is requested to be deleted, and this supports multiple files as well; additionally, a `username` parameter is required
- `GET /image/view`: given an `imageId` and potentially a `username` if the image is hidden, shows the requested image that is downloaded from the S3 bucket
- `GET /image/gallery`: similar to `GET /user/images` but returns a JSON array of image objects containing meta data of all guests and users with a public permission set