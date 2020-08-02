import express from 'express';
import data from './data';
import cors from 'cors';
import routes from './routes/routes';
const dotenv = require("dotenv");
const app = express();
dotenv.config()
//middleware
app.use(cors());
app.use(express.json());

//database
require('./database/database');

//routes
app.use('/api',routes);

//server
app.listen(5000, () => console.log('server running at port 5000'))
