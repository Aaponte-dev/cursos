const boom = require("@hapi/boom")

function checkRolesGpl(user, ...roles) {
  if (!roles.includes(user.role)) throw boom.unauthorized('Your role is not allow')
}

module.exports = checkRolesGpl;
