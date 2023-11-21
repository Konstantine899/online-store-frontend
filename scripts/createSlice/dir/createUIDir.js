const uiPath = require('../paths/uiPath');
const fs = require('fs/promises');

module.exports = async function (layer, slice) {
  try {
    await fs.mkdir(uiPath(layer, slice));
  } catch (error) {
    console.log(`Не удалось создать директорию ui в ${layer}/${slice}`);
  }
};
