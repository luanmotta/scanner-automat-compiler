const types = require('./types.json');
const reservedWords = types.reservedWords;

const isNumber = (char) => (/[0-9]/).test(char);
const isLetter = (char) => (/[A-Za-z]/).test(char);

const done = (char, returnValue) => char.length === 0 ? returnValue : types.error;

const B = (line, index) => {
  const char = line.charAt(index);

  if (isLetter(char) || isNumber(char)) {
    return B(line, index + 1);
  }

  return done(char, types.id);
};

const A = (line, index) => {
  const char = line.charAt(index);

  if (isLetter(char) || isNumber(char)) {
    return B(line, index + 1);
  }

  return done(char, types.id);
};

const E = (line, index) => {
  const char = line.charAt(index);

  if (isNumber(char)) {
    return E(line, index + 1);
  }

  return done(char, types.real);
};

const D = (line, index) => {
  const char = line.charAt(index);

  if (isNumber(char)) {
    return E(line, index + 1);
  }

  return types.error;
};

const C = (line, index) => {
  const char = line.charAt(index);

  if (isNumber(char)) {
    return C(line, index + 1);
  }
  if (char === '.') {
    return D(line, index + 1);
  }

  return types.int;
};

const G = (line, index) => {
  const char = line.charAt(index);

  if (char !== '') {
    return G(line, index + 1);
  }

  return done(char, types.comment);
};

const F = (line, index) => {
  const char = line.charAt(index);

  if (char === '/') {
    return G(line, index + 1);
  }

  return types.error;
};

const H = (line, index, possibleReservedWords = Object.keys(reservedWords)) => {
  const char = line.charAt(index);

  const remainingPossibleReservedWords = possibleReservedWords.filter(
    p => p.charAt(index) === char
  );

  if (remainingPossibleReservedWords.length === 1 && char.length === 0) {
    return reservedWords[remainingPossibleReservedWords[0]];
  }

  if (remainingPossibleReservedWords.length === 0) {
    return null;
  }

  return H(line, index + 1, remainingPossibleReservedWords);

};

const S = (line, index) => {
  const char = line.charAt(index);
  let token = null;

  if (isLetter(char)) {
    token = H(line, index);
    if (token) return token;

    token = A(line, index + 1);
    if (token) return token;
  }

  if (isNumber(char)) {
    token = C(line, index + 1);
    if (token) return token;
  }

  if (char === '/') {
    token = F(line, index + 1);
    if (token) return token;
  }

  return types.error;
};

// return identified token from the line
module.exports = (line) => S(line, 0);
