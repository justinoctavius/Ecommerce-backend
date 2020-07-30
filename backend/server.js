import express from 'express';
import data from './data';
import cors from 'cors';
import userRoute from './routes/userRoute.JS'
const app = express();

//middleware
app.use(cors());

//database
require('./database/database');

//routes
app.use('/api/users/',userRoute);

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    console.log(product)
    if(product){
        res.send(product);
    }
    else{
        res.status(500).send({message: 'Product not found.'});
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

//server
app.listen(4000, () => console.log('server running at port 4000'))
