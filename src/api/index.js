import { getParagraphs, getSentences, getWords } from './utils';


const generateText = (type, count) => {
  if (count > 0) {
    let result = '';
    switch (type) {
      case 'paragraphs':
        result = getParagraphs(+count);
        break;
      case 'sentences':
        result = getSentences(+count);
        break;
      case 'words':
        result = getWords(+count);
        break;
      default:
        result = getSentences(+count);
        break;
    }
    return result;
  } else {
    return null;
  }
}


export {
  generateText
}