const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');
const createPublicApiTemplate = require('../templates/createPublicApiTemplate');

module.exports = async function (layer, slice) {
  try {
    const componentName = firstCharToUpperCase(slice);
    const schemaName = `${firstCharToUpperCase(slice)}Schema`;
    await fs.writeFile(
      resolveRoot('src', layer, slice, 'index.ts'),
      createPublicApiTemplate(componentName, schemaName),
    );
  } catch (error) {
    console.log(`Не удалось создать public api`);
  }
};
