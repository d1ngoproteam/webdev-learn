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

router.post(ROUTE_PRODUCTS, (req, res, next) => {
  Product.create(req.body).then((product) => {
    res.send(product);
  }).catch((next) => {
    res.send(ERROR500);
  });
});

router.put(ROUTE_PRODUCTS_ID, (req, res, next) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then(() => {
    Product.findOne({ _id: req.params.id }).then((product) => {
      res.send(product);
    }).catch((next) => {
      res.send(ERROR404);
    });
  }).catch((next) => {
    res.send(ERROR500);
  });
});

router.delete(ROUTE_PRODUCTS_ID, (req, res, next) => {
  Product.findByIdAndRemove({ _id: req.params.id })
  .then((product) => {
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

router.get(ROUTE_REVIEWS_ID, (req, res, next) => {
  Review.findOne({ _id: req.params.id }).then((review) => {
    res.send(review);
  }).catch((next) => {
    res.send(ERROR404);
  });
});

router.post(ROUTE_REVIEWS, (req, res, next) => {
  Product.findOne({ _id: req.body.productId }).then((product) => {
    Review.create(req.body).then((review) => {
      res.send(review);
    }).catch((next) => {
      res.send(ERROR500);
    });
  }).catch((next) => {
    res.send(ERROR404);
  })
})

router.put(ROUTE_REVIEWS_ID, (req, res, next) => {
  Review.findByIdAndUpdate({ _id: req.params.id }, req.body)
  .then(() => {
    Review.findOne({_id: req.params.id}).then((review) => {
      res.send(review);
    }).catch((next) => {
      res.send(ERROR404);
    });
  }).catch((next) => {
    res.send(ERROR500);
  });
});

router.delete(ROUTE_REVIEWS, (req, res, next) => {
  Review.findByIdAndRemove({ _id: req.params.id })
  .then((review) => {
    res.send(review);
  }).catch((next) => {
    res.send(ERROR404);
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