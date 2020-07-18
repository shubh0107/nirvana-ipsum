import songs from './songs.json';

function getRandomInteger(min = 4, max = 7) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomItemFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getWords(n) {
  console.log('im herer', n);
  let words = '';
  do {
    let song = getRandomItemFromArray(songs);
    let lineFromTheLyrics = getRandomItemFromArray(song.lyrics);

    if (n > (words.split(' ').filter(item => item !== '').length + lineFromTheLyrics.split(' ').length)) {
      words += lineFromTheLyrics;
    } else {
      console.log('hree: ', words);
      words += lineFromTheLyrics.split(' ').splice(0, n).join(' ');
    }

  } while (words.split(' ').filter(item => item !== '').length != n);
  return words + '.';

}

export function getSentences(n) {
  const sentences = [];
  do {
    let song = getRandomItemFromArray(songs);
    const sentence = getRandomItemFromArray(song.lyrics);
    sentences.push(sentence);
  } while (sentences.length != n);

  return sentences.join('. ') + '.';
}

export function getParagraphs(n) {
  const paragraphs = [];
  do {
    let sentences = getSentences(getRandomInteger());
    paragraphs.push(sentences);
  } while (paragraphs.length != n);
  return paragraphs.join('\n');
}