const express = require('express');
const validate = require('../../middlewares/validate');
const {  buyerController } = require('../../controllers');

const router = express.Router();

router
  .route('/') 
  .get(buyerController.getBuyers)
  .post(buyerController.registerBuyer)

router
  .route('/:id')
  .get(buyerController.getBuyer)
  .patch(buyerController.updateBuyer)
  .delete(buyerController.deleteBuyer)

module.exports = router;