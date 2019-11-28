const Detail = require('../models/details');

exports.getAddDetail = (req, res, next) => {
  res.render('admin/edit-detail', {
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
      path: '/admin/edit-detail',
      editing: editMode,
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
  res.redirect('/admin/products:productId');
};
