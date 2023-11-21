const createModelDir = require('../dir/createModelDir');
const createTypesDir = require('../dir/createDirInModel');
const createSlicesDir = require('../dir/createDirInModel');
const createSelectorsDir = require('../dir/createDirInModel');
const createServicesDir = require('../dir/createDirInModel');
const createReduxSlice = require('../files/createReduxSlice');
const createSchemaType = require('../files/createSchemaType');

module.exports = async function (layer, slice) {
  await createModelDir(layer, slice);
  await createTypesDir(layer, slice, 'types');
  await createSlicesDir(layer, slice, 'slices');
  await createSelectorsDir(layer, slice, 'selectors');
  await createServicesDir(layer, slice, 'services');
  await createReduxSlice(layer, slice);
  await createSchemaType(layer, slice);
};
