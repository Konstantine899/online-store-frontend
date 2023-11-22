const fs = require('fs/promises');
const uiPath = require('../paths/uiPath');
const firstCharToUpperCase = require('../helpers/firstCharToUpperCase');
const createStoryBookTemplate = require('../templates/createStorybookTemplate');

module.exports = async function (layer, slice) {
  const componentName = firstCharToUpperCase(slice);
  await fs.writeFile(
    uiPath(layer, slice, componentName, `${componentName}.stories.tsx`),
    createStoryBookTemplate(layer, componentName),
  );
};
