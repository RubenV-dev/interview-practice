var addBinary = function (a, b) {
  let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return sum.toString(2);
};

var addBinary = function (a, b) {
  const res = [];
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let bitA = i >= 0 ? +a[i--] : 0;
    let bitB = j >= 0 ? +b[j--] : 0;
    let sum = bitA + bitB + carry;

    res.push(sum % 2);
    carry = Math.floor(sum / 2);
  }

  return res.reverse().join("");
};
