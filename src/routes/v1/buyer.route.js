const express = require('express');
const validate = require('../../middlewares/validate');
const  { buyerValidation }  = require('../../validations');
const {  buyerController } = require('../../controllers');

const router = express.Router();

router
  .route('/') 
  .get(buyerController.getBuyers)
  .post(validate(buyerValidation.registerBuyer),buyerController.registerUser)

router
  .route('/:id')
  .get(buyerController.getBuyer)
  .patch(validate(buyerValidation.updateBuyer),buyerController.updateBuyer)
  .delete(buyerController.deleteBuyer)

module.exports = router;