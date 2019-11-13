const express = require('express');
const publicRouter = express.Router();
const Property = require('../models/properties.js');

publicRouter.get('/:forRentOrSale' , (req, res, next) => {
    console.log(req.params)
    Property.find(req.params, (err, properties) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(properties);
    });
});


module.exports = publicRouter;