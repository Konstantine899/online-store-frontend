const fs = require('fs/promises');
const modelPath = require('../paths/modelPath');

module.exports = async function (layer, slice) {
  try {
    await fs.mkdir(modelPath(layer, slice));
  } catch (error) {
    console.log(`В ${layer}/${slice} не удалось создать директорию model`);
  }
};
