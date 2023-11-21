const fs = require('fs/promises');
const modelPath = require('../paths/modelPath');

module.exports = async function (layer, slice, dirName) {
  try {
    await fs.mkdir(modelPath(layer, slice, dirName));
  } catch (error) {
    console.log(
      `В ${layer}/${slice}/model не удалось создать директорию ${dirName}`,
    );
  }
};