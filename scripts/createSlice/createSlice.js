const fs = require('fs/promises');
const resolveRoot = require('./helpers/resolveRoot');
const createStructureUIDir = require('./structures/createStructureUIDir');
const createStructureModelDir = require('./structures/createStructureModelDir');

module.exports = async (layer, slice) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, slice));
  } catch (error) {
    console.log(`не удалось создать директорию для slice: ${slice}`);
  }
  if (layer !== 'widgets') {
    await createStructureUIDir(layer, slice);
    await createStructureModelDir(layer, slice);
  } else {
    await createStructureUIDir(layer, slice);
  }
};
