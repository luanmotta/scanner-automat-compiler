const { readFileSync } = require('fs');
const pathToInputFile  = process.argv[2] || process.env.inputFile || null;
const pathToOutputFile = process.argv[3] || process.env.outputFile || null;

const readFileSyncUtf8 = (path) => readFileSync(path, 'utf-8');

const response = (inputPath, outputPath) => ({
  'inputFile': readFileSyncUtf8(inputPath),
  'outputFile': outputPath && readFileSyncUtf8(outputPath)
});

module.exports = new Promise((resolve, reject) => {
  if (!pathToInputFile)
    reject('É necessário informar o caminho do arquivo de entrada');
  else
    resolve(response(pathToInputFile, pathToOutputFile));
});
