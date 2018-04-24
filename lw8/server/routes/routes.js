const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

const ROUTE_PRODUCTS = '/products';
const ROUTE_PRODUCTS_ID = '/products/:id';
const ROUTE_REVIEWS = '/reviews';
const ROUTE_REVIEWS_ID = '/reviews/:id';
const ROUTE_PRODUCTS_ID_REVIEWS = '/products/:id/reviews';

const ERROR404 = {
  error: '404 Not Found'
};

const ERROR500 = {
  error: '500 Internal Server Error'
};

router.get(ROUTE_PRODUCTS, (req, res, next) => {
  Product.find({}).then((products) => {
    res.send(products);
  }).catch((next) => {
    res.send(ERROR500);
  });
});

router.get(ROUTE_PRODUCTS_ID, (req, res, next) => {
  Product.findOne({ _id: req.params.id }).then((product) => {
    res.send(product);
  }).catch((next) => {
    res.send(ERROR404);
  });
});

router.get(ROUTE_REVIEWS, (req, res, next) => {
  Review.find({}).then((reviews) => {
    res.send(reviews);
  }).catch((next) => {
    res.send(ERROR500);
  });
});

router.get(ROUTE_PRODUCTS_ID_REVIEWS, (req, res, next) => {
  Review.find({ productId: req.params.id }).then((reviews) => {
    res.send(reviews);
  }).catch((next) => {
    res.send(ERROR404);
  });
});

module.exports = router;