const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const detailController = require('../controllers/detail');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.get('/edit-detail/:productId', detailController.getEditDetail);

router.post('/edit-detail', detailController.postEditDetail);

router.get('/add-detail/:productId', detailController.getAddDetail);

router.post('/add-detail', detailController.postAddDetail);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
