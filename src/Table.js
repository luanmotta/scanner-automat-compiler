class Table {
  constructor() {
    this.symbols = [];
  }

  insertAtTable(id) {
    const index = this.symbols.findIndex(el => el === id);

    // If already have index, return the index. Else, push to symbols and also return the index.
    return ~index ? index + 1: this.symbols.push(id);
  }

  getTable() {
    return this.symbols;
  }

}

const singleTonTable = new Table();

module.exports = singleTonTable;
