import config from '../config';
import mongoose from 'mongoose'

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(res => console.log('db connected'))
.catch(err => console.log(err.reason));