const Joi = require('joi');
// const { objectId } = require('./custom.validation');


const registerBuyer={
body: Joi.object().keys({
   name: Joi.string().required("Name is Required!"),
  cognome: Joi.string().required("Cognome is Required!"),
  email: Joi.string().required("Email is Required!"),
  numeroditelefono: Joi.number().empty(),
  nomeazienda: Joi.string().empty(),
  sitoweb: Joi.string().empty(),
  
  tutto: Joi.boolean(),
  abbigliamento: Joi.boolean(),
  cosmetica:Joi.boolean(),
  casa:Joi.boolean(),
  calzature:Joi.boolean(),
  benidiconsumo:Joi.boolean(),
  accessori:Joi.boolean(),
  altro:Joi.boolean(),
}),
}
const updateBuyer ={
  name: Joi.string(),
  cognome: Joi.string(),
  email: Joi.string(),
  numeroditelefono: Joi.number(),
  nomeazienda: Joi.string(),
  sitoweb: Joi.string(),
  tutto: Joi.boolean(),
  abbigliamento: Joi.boolean(),
  cosmetica:Joi.boolean(),
  casa:Joi.boolean(),
  calzature:Joi.boolean(),
  benidiconsumo:Joi.boolean(),
  accessori:Joi.boolean(),
  altro:Joi.boolean(),
}

module.exports = {
  registerBuyer,
  updateBuyer,
};
