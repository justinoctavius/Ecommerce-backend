const dotenv = require("dotenv");
dotenv.config()
module.exports = {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://octavius:8092310justin@cluster0.0tpyx.mongodb.net/ecommerce?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingSecret'
}