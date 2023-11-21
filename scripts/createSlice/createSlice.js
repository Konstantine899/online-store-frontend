const fs = require('fs/promises');
const resolveRoot = require('./helpers/resolveRoot');
const createUIDir = require('./dir/createUIDir');
const createReactComponent = require('./files/createReactComponent');

module.exports = async (layer, slice) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, slice));
  } catch (error) {
    console.log(`не удалось создать директорию для slice: ${slice}`);
  }
  await createUIDir(layer, slice);
  await createReactComponent(layer, slice);
};
