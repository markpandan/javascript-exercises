const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n == 0) return 0;

  let n_1 = 1;
  let n_2 = 0;
  let result;

  for (i = 2; i <= n; i++) {
    result = n_1 + n_2;

    n_2 = n_1;
    n_1 = result;
  }

  return n_1;
};

// Do not edit below this line
module.exports = fibonacci;
