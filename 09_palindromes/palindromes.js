const palindromes = function (statement) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  const cleanedStatement = statement
    .trim()
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  const reversedStatement = cleanedStatement.split("").reverse("").join("");
  return cleanedStatement === reversedStatement;
};

// Do not edit below this line
module.exports = palindromes;
