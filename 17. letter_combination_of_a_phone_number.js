var letterCombinations = function (digits) {
  // Base case: empty input string returns an empty array
  if (!digits || digits.length === 0) {
    return [];
  }

  // Digit-to-letter mapping matching traditional telephone keypads
  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  /**
   * Helper backtrack function
   * @param {number} index - Current digit index being processed
   * @param {string} currentCombination - Built string so far
   */
  function backtrack(index, currentCombination) {
    // Base Case: complete combination formed
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    // Fetch possible letters for the current digit
    const possibleLetters = phoneMap[digits[index]];

    // Loop through choices and recursively build the next step
    for (const letter of possibleLetters) {
      backtrack(index + 1, currentCombination + letter);
    }
  }

  // Start backtracking from index 0 with an empty combination
  backtrack(0, "");

  return result;
};
