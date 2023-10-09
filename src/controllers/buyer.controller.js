const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { buyerService } = require('../services');


const getBuyers = catchAsync(async (req, res) => {
    const result = await buyerService.queryBuyers();
    res.send(result);
});


const getBuyer = catchAsync(async (req, res) => {
    const buyer = await buyerService.getBuyerById(req.params.id);
    if (!buyer) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Buyer not found');
    }
    res.send(buyer);
});
const registerUser=(async(req,res)=>{
    const buyer=await buyerService.createBuyer(req.body)
    if(!buyer){
        throw new ApiError(httpStatus['401_NAME'] , "Buyer Register is Faild , Try again!")
    }
    res.send(buyer)
})

const updateBuyer = (async(req,res)=>{
    const updateBuyer = await buyerService.updateBuyer(req.body,req.params)
    if(!updateBuyer){
        throw new ApiError(httpStatus.NOT_MODIFIED , "Update user faild, try again " )
    }
    res.json({
        updateBuyer})
})

const deleteBuyer = (async(req,res) =>{
    const delUser = await buyerService.deleteBuyer(req.params)
    if(!delUser){
        throw new ApiError(httpStatus.NOT_MODIFIED , "Delete user faild, try again " )
    }
    res.json({

        delUser})
})

module.exports = {
    getBuyers,
    getBuyer,
    registerUser,
    updateBuyer,
    deleteBuyer
};
