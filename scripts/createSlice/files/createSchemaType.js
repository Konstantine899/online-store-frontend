const fs = require('fs/promises');
const modelPath = require('../paths/modelPath');
const createSchemaTypeTemplate = require('../templates/createSchemaTypeTemplate');

module.exports = async function (layer, slice) {
  await fs.writeFile(
    modelPath(layer, slice, 'types', `${slice}Schema.ts`),
    createSchemaTypeTemplate(slice),
  );
};
