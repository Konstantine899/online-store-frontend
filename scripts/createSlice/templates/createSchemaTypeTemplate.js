const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');

module.exports = function (sliceName) {
  return `export interface ${firstCharToUpperCase(sliceName)}Schema {};`;
};
