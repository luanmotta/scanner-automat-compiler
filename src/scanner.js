// const table = require('./table');
const automato = require('./automato');
const { error } = require('./types');

const errorList = [];

const format = (array) => {
  const formatedArray = [];

  array.forEach((line, index) => {
    if (line === error) {
      errorList.push(index + 1);
    } else {
      formatedArray.push(line = `${index + 1} ${line}`);
    }
  });

  return formatedArray;
};

module.exports = (inputFile) => {

  // Separate each line of file into an array
  const separatedLinesArray = inputFile.split('\n');

  // Classificate tokens of each line of array using automato
  const tokenized = separatedLinesArray.map(line => automato(line));

  // Formate with lines, remove errors and enumerates identifiers
  const formated = format(tokenized);

  console.log(formated);

  console.log(errorList);

};
