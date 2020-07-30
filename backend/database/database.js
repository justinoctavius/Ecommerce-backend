import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose'

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(res => console.log('db connected'))
.catch(err => console.log(error.reason));