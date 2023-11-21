const createUIDir = require('../dir/createUIDir');
const createReactComponent = require('../files/createReactComponent');

module.exports = async function (layer, slice) {
  await createUIDir(layer, slice);
  await createReactComponent(layer, slice);
};