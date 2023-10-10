const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { sellerService } = require('../services');


const getSellers = catchAsync(async (req, res) => {
    const result = await sellerService.getSellers();
    res.send(result);
});


const getSeller = catchAsync(async (req, res) => {
    const Seller = await sellerService.getSellerById(req.params.id);
    if (!Seller) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Seller not found');
    }
    res.send(Seller);
});
const registerSeller=(async(req,res)=>{
    try {
        const Seller=await sellerService.createSeller(req.body)
    if(!Seller){
        throw new ApiError(httpStatus['401_NAME'] , "Seller Register is Faild , Try again!")
    }
    res.send(Seller)
    } catch (error) {
        res.json({
            status:"Error",
            message:error,
           })
    }
    
})

const updateSeller = (async(req,res)=>{
    const updateSeller = await sellerService.updateSeller(req.body,req.params)
    if(!updateSeller){
        throw new ApiError(httpStatus.NOT_MODIFIED , "Update user faild, try again " )
    }
    res.json({
        updateSeller})
})

const deleteSeller = (async(req,res) =>{
    const delUser = await sellerService.deleteSeller(req.params)
    if(!delUser){
        throw new ApiError(httpStatus.NOT_MODIFIED , "Delete user faild, try again " )
    }
    res.json({

        delUser})
})

module.exports = {
    getSellers,
    getSeller,
    registerSeller,
    updateSeller,
    deleteSeller
};
