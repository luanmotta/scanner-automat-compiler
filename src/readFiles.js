const fs = require('fs');
const pathToInputFile  = process.argv[2];
const pathToOutputFile = process.argv[3];

const formatFile = (file) => file.toString('utf-8');

const response = (inputFile, outputFile) => ({
  'inputFile': formatFile(inputFile),
  'outputFile': outputFile && formatFile(outputFile)
});

module.exports = new Promise((resolve, reject) => {
  if (!pathToInputFile) {
    reject('É necessário informar o caminho do arquivo de entrada');
  }
  fs.createReadStream(pathToInputFile)
    .on('data', inputFile => {
      if (!pathToOutputFile)
        resolve(response(inputFile, null));

      fs.createReadStream(pathToOutputFile)
        .on('data', outputFile => {
          resolve(response(inputFile, outputFile));
        });
    });
});
