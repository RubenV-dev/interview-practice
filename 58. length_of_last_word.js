var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

//used trim to remove leading and trailing whitespaces, split to make an array and seperate the words and last index contained the word I wanmt to return
