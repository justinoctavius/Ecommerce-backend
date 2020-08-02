const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();
const { admin } = require('./controllers');
//middleware
app.use(cors());
app.use(express.json());

//database
require('./database/database');

//routes
app.use('/api',routes);
app.get('/', admin.createAdmin)

//server
const port = process.env.PORT || 5000
app.listen(port, () => console.log('server running at port ' + port))
