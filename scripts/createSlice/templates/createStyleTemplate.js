const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');
module.exports = function (componentName) {
  return `.${firstCharToUpperCase(componentName)} {};`;
};
