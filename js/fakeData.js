import {getRandomNumber} from './utils.js';

const fakeNames = ['Dan', 'John', 'Dmitriy', 'Endy', 'Keks', 'Html', 'Lebovsky', 'Artem', 'Yana', 'Svetlana'];
const fakeDescriptionArray = ['Rocks', 'Blood and Thunder', 'Great Keksby', 'React', 'Html Academy', 'Hexlet', 'Big and ugly'];
const fakeMessagesArray = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];


//Генерирует массив комментов
const generateFakeCommentsArray = () => Array.from({length: getRandomNumber(0, 30)}, (_, id) => ({
  id: id + 26,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: fakeMessagesArray[getRandomNumber(0, fakeMessagesArray.length)],
  name: fakeNames[getRandomNumber(0, fakeNames.length)],
}));

//Генерирует массив данных
const generateFakeDataArray = () => Array.from({legth: 25}, (_, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: fakeDescriptionArray[getRandomNumber(0, fakeDescriptionArray.length)],
  likes: getRandomNumber(15, 200),
  comments: generateFakeCommentsArray(),
}));

export {generateFakeDataArray};
