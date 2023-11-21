const fs = require('fs/promises');
const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');
const uiPath = require('../paths/uiPath');
const createStyleTemplate = require('../templates/createStyleTemplate');

module.exports = async function (layer, slice) {
  try {
    const componentName = firstCharToUpperCase(slice);
    await fs.writeFile(
      uiPath(layer, slice, componentName, `${componentName}.module.scss`),
      createStyleTemplate(slice),
    );
  } catch (error) {
    console.log(`Не удалось создать style компонент}`);
  }
};
