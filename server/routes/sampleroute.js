const express = require('express');
const router = express.Router();

// Include ContactSchema
const Contact = require('../models/contacts');

// Get sample
router.get('/contacts', (req, res, next) => {
    Contact.find(function(err, contacts){
        res.json(contacts)
    });
})

// Post sample
router.post('/contacts', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone
    });
    newContact.save((err, contact) => {
        if(err) {
            res.json({msg: 'Failed to add contact'});
        }
        else {
            res.json({msg: 'Contact added successfully'});
        }
    })
});

// Delete sample
router.delete('/contacts/:id', (req, res, next) => {
    Contact.remove({_id: req.params.id}, function(err, result){
        if(err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});

module.exports = router;
