const main = new Promise((resolve, reject) => {

  require('./readFiles')
    .then(({ inputFile, outputFile }) => {

      // do tratamene here
      const entrada = inputFile;

      if (outputFile) {
        resolve(entrada === outputFile ? 'Test passed' : 'Test failed');
      }

    })
    .catch(reject);
});

(() => {
  main
    .then(output => console.log(output))
    .catch(err => console.log(err.message));
})();
