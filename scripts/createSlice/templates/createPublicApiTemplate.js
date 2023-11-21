module.exports = function (componentName, schemaName) {
  return `export { ${componentName} } from './ui/${componentName}/${componentName}';
  export { ${schemaName} } from './model/types/${schemaName}';`;
};
