const createUIDir = require('../dir/createUIDir');
const createReactComponent = require('../files/createReactComponent');
const createStile = require('../files/createStile');
const createPublicApi = require('../files/createPublicApi');
const createPublicApiForWidgets = require('../files/createPublicApiForWidgets');
const createStoryBookComponent = require('../files/createStoryBookComponent');

module.exports = async function (layer, slice) {
  await createUIDir(layer, slice);
  await createReactComponent(layer, slice);
  await createStoryBookComponent(layer, slice);
  await createStile(layer, slice);
  if (layer !== 'widgets') {
    await createPublicApi(layer, slice);
  } else {
    await createPublicApiForWidgets(layer, slice);
  }
};
