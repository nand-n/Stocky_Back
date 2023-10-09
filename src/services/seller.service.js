const httpStatus = require('http-status');
const { Seller } = require('../models');
const dataSource = require('../utils/createDatabaseConnection');
const sortBy = require('../utils/sorter');
const findAll = require('./Plugins/findAll');

const sellerRepository = dataSource.getRepository(Seller).extend({ findAll, sortBy });

/**
 * Query for users
 * @param {Object} filter - Filter options
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const getSellers = async () => {

  return await sellerRepository.find({
    tableName:"Seller"
  })
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Risk>}
 */
const getSellerById = async (id) => {
  return await sellerRepository.findOneBy({ id: id });
};

const createSeller = async (selerBody) => {
  const seller = sellerRepository.create(selerBody);
  return await sellerRepository.save(seller);
};

const updateSeller = async (updateBody , parmas) => {
  const {id} = parmas 
    await sellerRepository.update(id, updateBody);
    return sellerRepository.findBy({ id:id });
};

const deleteSeller = async(delBody)=>{
  const {id} = delBody
return await sellerRepository.delete({ id: id });
}


module.exports = {
  getSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller
};
