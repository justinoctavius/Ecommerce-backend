const { Category } = require("../models");

const ctrl = {};

ctrl.get = async (req, res) => {
    const categories = await Category.find()
    if(categories.length > 0){
        res.send(categories)
    }else{
        res.send(false)
    }
}

ctrl.add = async (req, res) => {
    const category = req.body;
    console.log(category)
    if(category.category != ''){
        const oldCategory = await Category.findOne({category: category.category});
        if(oldCategory){
            res.send({msg: 'That category already exists', data: false})
        }else{
            const newCategory = new Category({
                category: category.category
            });
            const categorySaved = await newCategory.save();
            res.send({msg: '', data: categorySaved})
        }
    }else{
        res.send({msg: 'Select a category', data: false})
    }
}

ctrl.delete = async (req, res) => {
    const category = req.params.id;
    const oldCategory = await Category.findOne({category});
    if(oldCategory) {
        oldCategory.remove();
        res.send({msg: 'Remove success'})
    }else{
        res.send({msg: 'category don\'t exists'})
    }
}

module.exports = ctrl;