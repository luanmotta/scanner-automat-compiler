const automato = require('./automato');
const Table = require('./Table');
const ErrorList = require('./ErrorList');
const types = require('./types');

const joinAll = (arrayFormated) => {
  return `${arrayFormated}

Tabela de Símbolos
${Table.get()}

O programa possui erros nas linhas: ${ErrorList.get()}`;
};

const format = (tokensArray, textArray) => {
  const formatedArray = [];

  tokensArray.forEach((line, index) => {
    if (line === types.error) {
      ErrorList.insert(index);
    } else {

      // if this line is an identifier, int or real
      if (line === types.id || line === types.int || line === types.real) {
        // insert the identifier at the symbols table, and get the id number
        const identifierNumber = Table.insert(textArray[index]);

        // this line will contain the id number of the table at formatedArray
        formatedArray.push(`[${index + 1}] ${line} ${identifierNumber}`);
      } else {

        // if this line is not an identifier, don't use the identifier number at formated array
        formatedArray.push(`[${index + 1}] ${line}`);
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

  // Join the formated array, the failed lines and the symbols together
  const joined = joinAll(formated);

  return joined;

};
