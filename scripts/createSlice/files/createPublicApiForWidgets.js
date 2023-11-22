const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');
const createPublicApiForWidgetsTemplate = require('../templates/createPublicApiForWidgetsTemplate');

module.exports = async function (layer, slice) {
  try {
    const componentName = firstCharToUpperCase(slice);
    await fs.writeFile(
      resolveRoot('src', layer, slice, 'index.ts'),
      createPublicApiForWidgetsTemplate(componentName),
    );
  } catch (error) {
    console.log(`Не удалось создать public api`);
  }
};
