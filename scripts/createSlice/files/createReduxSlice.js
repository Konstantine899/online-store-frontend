const fs = require('fs/promises');
const modelPath = require('../paths/modelPath');
const createReduxSliceTemplate = require('../templates/createReduxSliceTemplate');
const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');

module.exports = async function (layer, slice) {
  try {
    const sliceName = firstCharToUpperCase(slice);
    await fs.writeFile(
      modelPath(layer, slice, 'slices', `${sliceName}Slice.ts`),
      createReduxSliceTemplate(sliceName),
    );
  } catch (error) {
    console.log(`Не удалось создать redux slice`);
  }
};
