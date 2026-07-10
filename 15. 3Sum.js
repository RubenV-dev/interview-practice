var threeSum = function (nums) {
  const results = [];

  // 1. Sort the numbers in ascending order
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Optimization: If the smallest number is positive,
    // it cannot sum to 0 with other positive numbers.
    if (nums[i] > 0) break;

    // Skip duplicate values for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        // Skip duplicate values for the second element
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        // Skip duplicate values for the third element
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++; // Need a larger value
      } else {
        right--; // Need a smaller value
      }
    }
  }

  return results;
};
