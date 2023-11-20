import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*{.ts,.tsx}'); // добавляю все файлы из проекта
const files = project.getSourceFiles(); // получаю все файлы

function isAbsolute(value: string): boolean {
  const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
  return layers.some((layer: string) => value.startsWith(layer)); // передаю стартовое значение из пути которое содержит слой
}

files.forEach((file) => {
  const importDeclarations = file.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
    console.log(importDeclaration.getModuleSpecifierValue());
  });
});

project.save();
