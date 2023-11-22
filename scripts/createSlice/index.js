const createSlice = require('./createSlice');
const layer = process.argv[2];
const slice = process.argv[3];

const layers = ['features', 'entities', 'pages', 'widgets'];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Укажите layer ${layers.join(' или ')}`);
}

if (!slice) {
  throw new Error('Укажите slice');
}

createSlice(layer, slice);
