var climbStairs = function (n) {
  let a = 0;
  let b = 0;
  let c = 0;

  if (n <= 2) {
    return n;
  } else {
    a = 1;
    b = 2;
    for (let i = 3; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
};
