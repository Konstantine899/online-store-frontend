const createUIDir = require('../dir/createUIDir');
const createReactComponent = require('../files/createReactComponent');
const createStile = require('../files/createStile');
const createPublicApi = require('../files/createPublicApi');

module.exports = async function (layer, slice) {
  await createUIDir(layer, slice);
  await createReactComponent(layer, slice);
  await createStile(layer, slice);
  await createPublicApi(layer, slice);
};
