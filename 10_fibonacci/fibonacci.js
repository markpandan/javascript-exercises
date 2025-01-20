const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n == 0) return 0;
  if (n == 1) return 1;

  let n_1 = 1;
  let n_2 = 0;
  let result;

  for (i = 2; i <= n; i++) {
    result = n_1 + n_2;

    n_2 = n_1;
    n_1 = result;
  }
  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
