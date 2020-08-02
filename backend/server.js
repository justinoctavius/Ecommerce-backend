const express = require('express');
const data = require('./data');
const cors = require('cors');
const routes = require('./routes/routes');
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
const port = process.env.PORT || 5000
app.listen(port, () => console.log('server running at port' + port))
