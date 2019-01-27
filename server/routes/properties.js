const express = require('express');
const router = express.Router();
const Property = require('../models/property');

router.get('', function (req, res) {
    Property.find({}, function (err, foundProperties) {
        res.json(foundProperties);
    });

});

router.get('/:propertyId', function (req, res) {
    const propertyId = req.params.propertyId;
    Property.findById(propertyId, function (err, foundProperty) {
        if (err) {
            res.status(422).send({errors: [{title: 'Property Error', details: 'Property not found'}]})
        }
        res.json(foundProperty);
    })
});
module.exports = router;