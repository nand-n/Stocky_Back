const express = require('express');
const validate = require('../../middlewares/validate');
const {  contactController } = require('../../controllers');

const router = express.Router();

router
  .route('/') 
  .get(contactController.getContacts)
  .post(contactController.registerContact)

router
  .route('/:id')
  .get(contactController.getBuyer)
  .patch(contactController.updateBuyer)
  .delete(contactController.deleteBuyer)

module.exports = router;