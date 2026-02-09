var countAndSay = function (n) {
  if (n === 1) return "1";

  let s = countAndSay(n - 1);
  let result = "";
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) != s.charAt(i - 1)) {
      result += count;
      result += s.charAt(i - 1);
      count = 1;
    } else {
      count++;
    }
  }

  result += count;
  result += s.charAt(s.length - 1);

  return result;
};
