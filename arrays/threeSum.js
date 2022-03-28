/**
 * @param {number[]} nums
 * @return {number[][]}
 * https://leetcode.com/problems/3sum/
 */

// using brute force
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;

      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] == nums[k - 1]) continue;

        if (nums[i] + nums[j] + nums[k] == 0) {
          triplets.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return triplets;
};

// using optimal solution
var threeSum = function (nums) {
      nums.sort((a, b) => a - b);
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    const target = 0 - nums[i];
    const left = i + 1;
    const right = nums.length - 1;

    while (right > left) {
      const sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]]);
        while(nums[left] === nums[left+1]) left++
        while(nums[right] === nums[right-1]) right--
        left++
        right--
      }
    }
  }
  return results;
};
