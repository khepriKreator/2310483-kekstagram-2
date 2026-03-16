//Генерирует случайное число
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

//Проверяет длину строки
const isStringLonger = (string, length) => string.length <= length;

// Через преобразование в массив и обратно
/* const isStringPalindrome = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = normalizedString.split('').reverse().join('');
  return normalizedString === reversedString;
}; */

// Через цикл for без преобразования в массив
const isStringPalindrome = (string) => {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return normalizedString === reversedString;
};

// Извлекает цифры из строки и преобразует в одно число
const getNumberFromString = (string) => {
  const normalizedString = (typeof string === 'number') ? string.toString() : string;
  let result = '';
  for (let i = 0; i < normalizedString.length; i++) {
    const symbol = normalizedString[i];
    result = !isNaN(parseInt(symbol, 10)) ? result + symbol : result;
  }
  return (result === '') ? NaN : parseInt(result, 10);
};

// Проверяет событий клавиатуры
const isEscapeKey = (evt) => evt.key === 'Escape' || evt.keyCode === 27;
const isEnterKey = (evt) => evt.key === 'Enter' || evt.keyCode === 13;

export {
  getRandomNumber,
  isStringLonger,
  isStringPalindrome,
  getNumberFromString,
  isEscapeKey,
  isEnterKey,
};
