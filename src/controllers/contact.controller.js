const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { contactService } = require('../services');


const getContacts = catchAsync(async (req, res) => {
    const result = await contactService.getContacts();
    res.send(result);
});
const getBuyer = catchAsync(async (req, res) => {
    const buyer = await contactService.getSellerById(req.params.id);
    if (!buyer) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Buyer not found');
    }
    res.send(buyer);
});
const registerContact=(async(req,res)=>{
    try {
          const buyer=await contactService.createContact(req.body)
    if(!buyer){
        res.send( ApiError(httpStatus['401_NAME'] , "Buyer Register is Faild , Try again!"))
    }
    res.send(buyer)
    } catch (error) {
       res.json({
        status:"Error",
        message:error,
       })
    }

  
})

const updateBuyer = (async(req,res)=>{
    const updateBuyer = await contactService.updateSeller(req.body,req.params)
    if(!updateBuyer){
        throw new ApiError(httpStatus.NOT_MODIFIED , "Update user faild, try again " )
    }
    res.json({
        updateBuyer})
})

const deleteBuyer = (async(req,res) =>{
    const delUser = await contactService.deleteSeller(req.params)
    if(!delUser){
        throw new ApiError(httpStatus.NOT_MODIFIED , "Delete user faild, try again " )
    }
    res.json({

        delUser})
})

module.exports = {
    getContacts,
    getBuyer,
    registerContact,
    updateBuyer,
    deleteBuyer
};
