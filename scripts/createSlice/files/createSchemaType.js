const fs = require('fs/promises');
const modelPath = require('../paths/modelPath');
const createSchemaTypeTemplate = require('../templates/createSchemaTypeTemplate');
const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');

module.exports = async function (layer, slice) {
  const sliceName = firstCharToUpperCase(slice);
  await fs.writeFile(
    modelPath(layer, slice, 'types', `${sliceName}Schema.ts`),
    createSchemaTypeTemplate(slice),
  );
};
