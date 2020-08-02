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

// app.get('/api/products/:id', (req, res) => {
//     const productId = req.params.id;
//     const product = data.products.find(x => x._id === productId);
//     console.log(product)
//     if(product){
//         res.send(product);
//     }
//     else{
//         res.status(500).send({message: 'Product not found.'});
//     }
// });

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });

//server
app.listen(5000, () => console.log('server running at port 5000'))
