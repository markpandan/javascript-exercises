const reverseString = function (word) {
  let reversedWord = "";
  for (i = 1; i <= word.length; i++) {
    reversedWord += word.at(i * -1);
  }

  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
