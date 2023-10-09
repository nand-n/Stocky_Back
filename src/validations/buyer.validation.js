const Joi = require('joi');
// const { objectId } = require('./custom.validation');


const registerBuyer={
body: Joi.object().keys({
  name: Joi.string().required(),
  cognome: Joi.string().required(),
  email: Joi.string().required(),
  numeroditelefono: Joi.number().required(),
  nomeazienda: Joi.string().required(),
  sitoweb: Joi.string().required(),
  tutto: Joi.boolean().required(),
  abbigliamento: Joi.boolean().required(),
  cosmetica:Joi.boolean().required(),
  casa:Joi.boolean().required(),
  calzature:Joi.boolean().required(),
  benidiconsumo:Joi.boolean().required(),
  accessori:Joi.boolean().required(),
  altro:Joi.boolean().required(),
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
  // updateBuyer,
};
