import {COMMENT_LINES, DESCRIPTIONS, NAMES, SIMILAR_PHOTOS_LIST} from './data.js';
import {getRandomInteger, getRandomArrayElement} from './util.js';

const createMessage = () => Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENT_LINES)).join(" ");

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const getComments = () => Array.from({length: getRandomInteger(0, 30)}, (_comment, id) => createComment(id));

const createPicture = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: getComments(),
});

const getPictures = () => Array.from({length: SIMILAR_PHOTOS_LIST}, (_picture, id) => createPicture(id));

export {getPictures};
