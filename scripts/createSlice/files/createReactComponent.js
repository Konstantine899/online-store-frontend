const fs = require('fs/promises');
const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');
const uiPath = require('../paths/uiPath');
const createComponentTemplate = require('../templates/createComponentTemplate');

module.exports = async function (layer, slice) {
  try {
    const componentName = firstCharToUpperCase(slice);
    await fs.mkdir(uiPath(layer, slice, componentName));
    await fs.writeFile(
      uiPath(layer, slice, componentName, `${componentName}.tsx`),
      createComponentTemplate(componentName),
    );
  } catch (error) {
    console.log(`Не удалось создать react component`);
  }
};
