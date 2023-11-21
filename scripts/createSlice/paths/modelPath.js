const resolveRoot = require('../helpers/resolveRoot');
module.exports = function (layer, slice, ...segments) {
  return resolveRoot('src', layer, slice, 'model', ...segments);
};
