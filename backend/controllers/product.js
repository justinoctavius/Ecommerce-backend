const { Product } = require('../models');
const ctrl = {};

ctrl.get = async (req, res) => {
    const products = await Product.find({});
    req.send({msg: 'hello word'})
    if(products){
        res.send(products)
    }else{
        res.status(404).send('There aren\'t products')
    }
};

ctrl.getOne = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id});
    if(product){
        res.send(product)
    }else{
        return res.status(500).send({msg: 'product not found', data: product})
    }
}

ctrl.put = async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findOne({_id: productId});
    console.log(product)
    if(product){
        product.name = req.body.name;
        product.price = req.body.price;
        product.image = req.body.image;
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        const updatedProduct = await product.save();
        if(updatedProduct) {
            return res.status(200).send({ message: 'Product Updated', data: updatedProduct});
        }
        return res.status(500).send({ message: 'Error in Updating Product.'})
    }
    return res.status(500).send({ message: 'Product don\'t exists'})
}

ctrl.delete = async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if(deletedProduct){
        await deletedProduct.remove();
        res.send({message: 'product Deleted'})
    }else{
        res.send('Error in deleting')
    }
}

ctrl.getProduct = async (req, res) => {
    const productId = req.params.id;
    const product = Product.find(x => x._id === productId);
    if(product){
        res.send(product);
    }
    else{
        res.status(500).send({message: 'Product not found.'});
    }
}

ctrl.add = async (req, res) => {
    const { name, price, image, brand, category, countInStock, 
            description} = req.body;
    const products = new Product({
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description
    }); 
    const newProduct = await products.save();
    if(newProduct){
        return res.status(201).send({message: 'New Product Created.', data: newProduct})
    }else{
        res.status(500).send({message: 'Error in Creating Product.'})
    }
}

module.exports = ctrl