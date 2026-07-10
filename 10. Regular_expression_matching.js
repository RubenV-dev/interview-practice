var isMatch = function (s, p) {
  // Create a memoization table (Map) to store visited (i, j) states
  const memo = new Map();

  // Helper function for depth-first search tracking indices i and j
  function dfs(i, j) {
    // Create a unique key for the current state
    const key = `${i},${j}`;
    if (memo.has(key)) return memo.get(key);

    // Base Case 1: If pattern is completely consumed
    if (j === p.length) {
      // Returns true only if the string s is also completely consumed
      return i === s.length;
    }

    // Check if the current characters match
    // (i < s.length ensures we haven't run out of characters in the string)
    const firstMatch = i < s.length && (s[i] === p[j] || p[j] === ".");

    let result;

    // If the next character in the pattern is a wildcard '*'
    if (j + 1 < p.length && p[j + 1] === "*") {
      result =
        // Option A: Skip the '*' character entirely (0 occurrences)
        dfs(i, j + 2) ||
        // Option B: Consume 1 character of s and stay on the '*' pattern
        (firstMatch && dfs(i + 1, j));
    } else {
      // No wildcard: If characters match, move both pointers forward by 1
      result = firstMatch && dfs(i + 1, j + 1);
    }

    // Cache the result in our memo table and return it
    memo.set(key, result);
    return result;
  }

  return dfs(0, 0);
};
