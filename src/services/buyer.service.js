const httpStatus = require('http-status');
const { Buyer } = require('../models');
const dataSource = require('../utils/createDatabaseConnection');
const sortBy = require('../utils/sorter');
const findAll = require('./Plugins/findAll');

const buyerRepository = dataSource.getRepository(Buyer).extend({ findAll, sortBy });

/**
 * Query for users
 * @param {Object} filter - Filter options
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const queryBuyers = async () => {

  return await buyerRepository.find({
    tableName:"Buyer"
  })
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Risk>}
 */
const getBuyerById = async (id) => {
  return await buyerRepository.findOneBy({ id: id });
};

const createBuyer = async (buyerBody) => {
  const buyer = buyerRepository.create(buyerBody);
  return await buyerRepository.save(buyer);
};

const updateBuyer = async (updateBody , parmas) => {
  const {id} = parmas 
    await buyerRepository.update(id, updateBody);
    return buyerRepository.findBy({ id:id });
};

const deleteBuyer = async(delBody)=>{
  const {id} = delBody
return await buyerRepository.delete({ id: id });
}


module.exports = {
  queryBuyers,
  getBuyerById,
  createBuyer,
  updateBuyer,
  deleteBuyer
};
