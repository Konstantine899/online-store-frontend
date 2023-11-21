const fs = require('fs/promises');
const modelPath = require('../paths/modelPath');
const createReduxSliceTemplate = require('../templates/createReduxSliceTemplate');

module.exports = async function (layer, slice) {
  try {
    await fs.writeFile(
      modelPath(layer, slice, 'slices', `${slice}Slice.ts`),
      createReduxSliceTemplate(slice),
    );
  } catch (error) {
    console.log(`Не удалось создать redux slice`);
  }
};
