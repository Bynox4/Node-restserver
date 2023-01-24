import * as dotenv from 'dotenv';
dotenv.config();

import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_APIKEY, 
    api_secret: process.env.CLOUDINARY_APISECRET,
    secure: true
});

import Server from './models/server.js';

const server = new Server();


server.listen();