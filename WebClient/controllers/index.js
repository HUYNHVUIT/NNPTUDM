const product = require('../models/product');

exports.index = async (req, res, next) => {
    const data = await product.list();
    console.log(req.user)
    res.render('index', {data,user: req.user});
};