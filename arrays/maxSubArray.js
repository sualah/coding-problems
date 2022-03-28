/**
 * Kadane's algorithms
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSub = nums[0];
  for (var i= 1; i < nums.length; i++) {

    nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
  
    maxSub = Math.max(maxSub, nums[i]);
  }
  return maxSub;
};
