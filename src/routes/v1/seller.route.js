const express = require('express');
const validate = require('../../middlewares/validate');
const  { buyerValidation }  = require('../../validations');
const {  sellerController } = require('../../controllers');

const router = express.Router();

router
  .route('/') 
  .get(sellerController.getSellers)
  .post(validate(buyerValidation.registerBuyer),sellerController.registerSeller)

router
  .route('/:id')
  .get(sellerController.getSeller)
  .patch(validate(buyerValidation.updateBuyer),sellerController.updateSeller)
  .delete(sellerController.deleteSeller)

module.exports = router;