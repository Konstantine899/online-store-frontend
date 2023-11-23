module.exports = function (componentName, schemaName) {
  return `export { ${componentName} } from './ui/${componentName}/${componentName}';
  export type { ${schemaName} } from './model/types/${schemaName}';`;
};
