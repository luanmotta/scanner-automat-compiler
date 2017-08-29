class ErrorList {
  constructor() {
    this.list = [];
  }

  insert(index) {
    this.list.push(index + 1);
  }

  get() {
    // Separate array by commas
    const separatedByCommas = this.list.join(", ");

    // Return the string with the last comma replaced by 'e'
    return separatedByCommas.replace(/,(?=[^,]*$)/, ' e');
  }

}

const singleTonErrorList = new ErrorList();

module.exports = singleTonErrorList;
