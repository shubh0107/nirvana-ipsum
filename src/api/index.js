import { getParagraphs, getSentences, getWords } from './utils';


const generateText = (type, count) => {
  console.log('type: ', type);
  if (count > 0) {
    let result = '';
    switch (type) {
      case 'paragraphs':
        result = getParagraphs(count);
        // setResult(result);
        break;
      case 'sentences':
        result = getSentences(count);
        // setResult(result);
        break;
      case 'words':
        result = getWords(count);
        // setResult(result);
        break;
      default:
        result = getSentences(count);
        // setResult(result);
        break;
    }
    return result;
  } else {
    // setResult(null);
    return null;
  }
}


export {
  generateText
}