const express = require('express');
const router = require('express').Router();
const contactController = require('../controllers/contacts');

router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);

module.exports = router;  