const httpStatus = require('http-status');
const { Contact } = require('../models');
const dataSource = require('../utils/createDatabaseConnection');
const sortBy = require('../utils/sorter');
const findAll = require('./Plugins/findAll');

const contactRepository = dataSource.getRepository(Contact).extend({ findAll, sortBy });

/**
 * Query for users
 * @param {Object} filter - Filter options
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

const getContacts = async () => {

  return await contactRepository.find({
    tableName:"Contact"
  })
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Risk>}
 */
const getSellerById = async (id) => {
  return await contactRepository.findOneBy({ id: id });
};

const createContact = async (selerBody) => {
  try {
     const seller = contactRepository.create(selerBody);
  return await contactRepository.save(seller);
  } catch (error) {
    throw error
  }
 
};

const updateSeller = async (updateBody , parmas) => {
  const {id} = parmas 
    await contactRepository.update(id, updateBody);
    return contactRepository.findBy({ id:id });
};

const deleteSeller = async(delBody)=>{
  const {id} = delBody
return await contactRepository.delete({ id: id });
}


module.exports = {
  getContacts,
  getSellerById,
  createContact,
  updateSeller,
  deleteSeller
};
