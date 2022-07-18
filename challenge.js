"use strict";

const imperativeLongestWord = function (sentence) {
  // create a copy of the argument
  let testSentence = sentence;

  // ensure string is in lower case
  testSentence = testSentence.toLowerCase();

  // convert the sentence string to an array
  const sentenceArr = testSentence.split(" ");

  // remove characters that are not letters from each word
  const cleanArr = sentenceArr.map((word) => word.replace(/[^a-zA-Z ]/g, ""));

  // sort the array
  const sortedArr = cleanArr.sort((a, b) => b.length - a.length);

  // create array of the longest characters ie word with the same lenth as the first element
  const longestArr = sortedArr.filter((word) => word.length === sortedArr[0].length);

  // check if we have two or more 'longest' words, if not we return
  if (longestArr.length > 1) {
    //find the word with the most vowels
    const maxVovels = longestArr.map((word) => word.match(/[aeiou]/gi).length);
    const maxVovel = Math.max(...maxVovels);
    const maxVowelIndex = maxVovels.indexOf(maxVovel);

    return longestArr[maxVowelIndex];
  } else {
    return String(longestArr);
  }
};

console.log(
  imperativeLongestWord(
    "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"
  )
);
