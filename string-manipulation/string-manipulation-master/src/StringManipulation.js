//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  if (Object.prototype.toString.call(str)!=="[object String]") return -1;
  let count = 0;
  while (str != "") {
    count++;
    str = str.slice(1);
  }
  return count;
};
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let count = str.split("").reduce((count, currentLetter) => {
    if (vowels.indexOf(currentLetter) >= 0) return count + 1;
    else return count;
  }, 0);
  return count;
};

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  let i = 0;
  let exists = false;
  while (i <= str.length - checkStr.length) {
    let j = 0;
    while (str[i + j] == checkStr[j] && j < checkStr.length && !exists) {
      j++;
    }
    if (j == checkStr.length) exists = true;
    i++;
  }
  return exists;
};

const findSubstr = (str, checkStr) => {
  let i = 0;
  while (i <= str.length - checkStr.length) {
    let j = 0;
    while (str[i + j] == checkStr[j] && j < checkStr.length) {
      j++;
    }

    if (j == checkStr.length) return i;
    i++;
  }
  return -1;
};

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  //return str.replace(wordToBeReplaced, replaceWord);
  const positionOfReplacableWord = findSubstr(str, wordToBeReplaced);
  if (positionOfReplacableWord===-1)
    return str;  
  let i = positionOfReplacableWord;
  let j = 0;
  while (j < replaceWord.length) {
    str = str.substring(0, i) + replaceWord[j] + str.substring(i + 1);
    i++;
    j++;
  }

  if (replaceWord.length < wordToBeReplaced.length)
    str = str.substring(0,i) + str.substring(i+wordToBeReplaced.length-replaceWord.length);
  return str;
};

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  let outputWord = str.split(" ").map(word => {
    
    if (word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122){
      word = String.fromCharCode(word.charCodeAt(0)-32)+ word.substring(1);
    }
    for(let i=1;i<str.length;i++){
      if (word.charCodeAt(i)>=65 && word.charCodeAt(i)<=90)
        word = word.substring(0,i)+String.fromCharCode(word.charCodeAt(i)+32)+word.substring(i+1);
    }
    return word;
  }).join(" ");

  return outputWord;
};

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  const strSplit = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
};

module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord,
};
