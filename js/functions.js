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

const isMeetingFitsWorkingDay = (workStarts, workEnds, meetingStarts, meetingDuration) => {
  const [meetingStartHours, meetingStartMinutes] = workStarts.split(':');
  const [workEndsHours, workEndsMinutes] = workEnds.split(':');
  const [meetingStartsHours, meetingStartsMinutes] = meetingStarts.split(':');

  const workStartsInMinutes = Number(meetingStartHours) * 60 + Number(meetingStartMinutes);
  const workEndsInMinutes = Number(workEndsHours) * 60 + Number(workEndsMinutes);
  const meetingStartsInMinutes = Number(meetingStartsHours) * 60 + Number(meetingStartsMinutes);

  const result = workStartsInMinutes + meetingStartsInMinutes + meetingDuration <= workEndsInMinutes;

  return result;
};

console.log('result: ', isMeetingFitsWorkingDay('08:00', '17:30', '14:00', 90));
console.log('result: ', isMeetingFitsWorkingDay('8:0', '10:0', '8:0', 120));
console.log('result: ', isMeetingFitsWorkingDay('08:00', '14:30', '14:00', 90));
console.log('result: ', isMeetingFitsWorkingDay('14:00', '17:30', '08:0', 90));
console.log('result: ', isMeetingFitsWorkingDay('8:00', '17:30', '08:00', 900));
