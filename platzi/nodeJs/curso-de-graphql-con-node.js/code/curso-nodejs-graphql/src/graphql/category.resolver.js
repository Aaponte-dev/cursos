const CategoryService = require('./../services/category.service');
const checkRolesGpl = require('../utils/checkRolesGpl');
const checkJwtGpl = require('../utils/checkJwtGpl');
const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const user = await checkJwtGpl(context);
  checkRolesGpl(user, 'admin');
  return service.create({
    ...dto,
    image: dto.image.href
  });
};

const getCategory = (_, { id })  => {
  return service.findOne(id);
}

module.exports = {
  addCategory,
  getCategory
}
