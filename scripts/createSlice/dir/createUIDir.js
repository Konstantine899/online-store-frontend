const uiPath = require('../paths/uiPath');
const fs = require('fs/promises');
const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');

module.exports = async function (layer, slice) {
  const componentName = firstCharToUpperCase(slice);
  try {
    await fs.mkdir(uiPath(layer, componentName));
  } catch (error) {
    console.log(`Не удалось создать директорию ui в ${layer}/${slice}`);
  }
};
