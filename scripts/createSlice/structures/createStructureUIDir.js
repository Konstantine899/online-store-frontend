const createUIDir = require('../dir/createUIDir');
const createReactComponent = require('../files/createReactComponent');
const createStile = require('../files/createStile');

module.exports = async function (layer, slice) {
  await createUIDir(layer, slice);
  await createReactComponent(layer, slice);
  await createStile(layer, slice);
};
