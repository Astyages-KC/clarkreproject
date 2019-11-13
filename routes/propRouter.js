const express = require('express');
const propRouter = express.Router();
const Property = require('../models/properties.js');

// Get All
propRouter.get('/', (req, res, next) => {
    Property.find((err, properties) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(properties);
    });
});

//Get by user
propRouter.get('/user', (req, res, next) => {
    Property.find({user: req.user._id}, (err, userProperties) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(userProperties)
    })
})


// Post
propRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    req.body.username = req.user.username
    const newProperty = new Property(req.body)
    newProperty.save((err, savedProperty) => {
        if(err){
            res.status(500)
            return next(err)
        }
       return res.status(201).send(savedProperty) 
    })
})

// Put
propRouter.put('/:_id', (req, res, next) => {
    // console.log('da params have the id: ', req.params._id)
    // console.log('da body has the updated property: ', req.body)
    Property.findByIdAndUpdate(req.params._id, req.body, (err, property) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.send(property)
    })
})

propRouter.delete("/:_id", (req, res, next) => {
    Property.findByIdAndRemove(req.params._id, (err, property) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.send(property);
    });
  });

module.exports = propRouter;