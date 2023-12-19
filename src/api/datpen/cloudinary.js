require('dotenv').config();
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_IMAGE_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// TEST
// cloudinary.config(
//   {
//     cloud_name: process.env.CLOUD_IMAGE_NAME_TEST,
//     api_key: process.env.CLOUD_API_KEY_TEST,
//     api_secret: process.env.CLOUD_API_SECRET_TEST,
//   },
// );

module.exports = cloudinary;
