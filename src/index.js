const main = () => new Promise((resolve, reject) => {

  require('./readFiles')
    .then(({ inputFile, outputFile }) => {

      const scannerOutput = require('./scanner')(inputFile);

      if (outputFile)
        resolve(scannerOutput === outputFile ? 'Test passed' : 'Test failed');
      else
        resolve(scannerOutput);
    })
    .catch(reject);
});

(() => {
  main()
    .then(output => console.log(output))
    .catch(err => console.log(err.message));
})();
