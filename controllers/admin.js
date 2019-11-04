const Product = require('../models/product');
const Detail = require('../models/details');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const category = req.body.category;
  const product = new Product(null, title, imageUrl, category);
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;
  const updatedCategory = req.body.category;
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedCategory,
  );
  updatedProduct.save();
  res.redirect('/admin/products');
};

exports.getAddDetail = (req, res, next) => {
  res.render('admin/edit-detail', {
    pageTitle: 'Add Product',
    path: '/admin/add-detail',
    editing: false
  });
};

exports.postAddDetail = (req, res, next) => {
  const water = req.body.water;
  const light = req.body.light;
  const other = req.body.other;
  const category = req.body.category;
  const detail = new Detail(null, water, light, other, category);
  detail.save();
  res.redirect('/');
};


exports.getEditDetail = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Detail.findById(prodId, detail => {
    if (!detail) {
      return res.redirect('/');
    }
    res.render('admin/edit-detail', {
      pageTitle: 'Edit Detail',
      path: '/admin/edit-detail',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditDetail = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedWater = req.body.water;
  const updatedLight = req.body.light;
  const updatedOther = req.body.other;
  const updatedCategory = req.body.category;
  const updatedProduct = new Detail(
    prodId,
    updatedWater,
    updatedLight,
    updatedOther,
  );
  updatedDetails.save();
  res.redirect('/admin/details');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');
};
