const automato = require('./automato');
const { insertAtTable } = require('./Table');
const { error, id } = require('./types');

const errorList = [];

const format = (tokensArray, textArray) => {
  const formatedArray = [];

  tokensArray.forEach((line, index) => {
    if (line === error) {
      errorList.push(index + 1);
    } else {
      formatedArray.push(line = `[${index + 1}] ${line}`);

      // if this line is an identifier
      if (line === id) {

        // insert the identifier at the symbols table
        const idNumber = insertAtTable(textArray[index]);

        // and add in the formatedArray the symbol number
        formatedArray[index].concat(` ${idNumber}`);
      }
    }
  });

  // join all lines again
  return formatedArray.join('\n');
};

module.exports = (inputFile) => {

  // Separate each line of file into an array
  const separatedLinesArray = inputFile.split('\n');

  // Classificate tokens of each line of array using automato
  const tokenized = separatedLinesArray.map(line => automato(line));

  // Formate with lines, remove errors
  const formated = format(tokenized, separatedLinesArray);

  console.log(formated);

  console.log(errorList);

};
