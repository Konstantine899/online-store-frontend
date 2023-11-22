module.exports = function (componentName) {
  return `export { ${componentName} } from './ui/${componentName}/${componentName}';`;
};
