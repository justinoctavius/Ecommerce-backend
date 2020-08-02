const { isAuth, isAdmin } = require('../util');

const express = require('express');
const { user, product, category, admin } = require('../controllers');

const router = express.Router();

//products
router.get('/products', product.get);
router.get('/products/:id', product.getOne);
router.delete('/products/:id', isAuth, isAdmin, product.delete);
router.put('/products/:id', isAuth, isAdmin, product.put);
router.post('/products', isAuth, isAdmin, product.add);
//users
router.post('/users/signin', user.signin);
router.post('/users/register', user.register);
//admin
router.get('/users/createAdmin', admin.createAdmin);
router.get('/users/getAdmins', isAuth, isAdmin, admin.getAdmins);
router.delete('/users/getAdmins/:id', isAuth, isAdmin, admin.deleteAdmins);
//categories
router.get('/category', category.get)
router.post('/category', isAuth, isAdmin, category.add)
router.delete('/category/:id', isAuth, isAdmin, category.delete)

module.exports = router;