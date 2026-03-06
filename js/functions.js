const validateStringLenght = (string, length) => (string.length <= length) ? true : false;

// Через преобразование в массив и обратно
const isStringPalindrome1 = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
};

// Через цикл for без преобразования в массив
const isStringPalindrome2 = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return normalizedString === reversedString;
};

const getNumberFromString = (string) => {
  const normalizedString = (typeof string === 'number') ? string.toString() : string;
  let result = '';
  for (let i = 0; i < normalizedString.length; i++) {
    const symbol = normalizedString[i];
    result = !isNaN(parseInt(symbol, 10)) ? result + symbol : result;
  }
  return parseInt(result, 10);
};
