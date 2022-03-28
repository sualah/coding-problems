/**
 *
 * https://leetcode.com/problems/maximum-product-subarray/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let curr_max = curr_min = prev_max = maximum = nums[0];

  for (var i = 1; i < nums.length; i++) {
    // curr_min * num handles the case of two -ves resulting positive
    curr_max = Math.ax(nums[i], nums[i] * curr_max, curr_min * nums[i]);
    //# num * prev_max handles the case where -ve and +ve result in negative
    curr_min = Math.min(nums[i], nums[i] * curr_min, nums[i] * prev_max);

     //# stores the value of previous max throughout an interation
    prev_max = curr_max;

    maximum = Math.max(curr_max, maximum);
  }

  return maximum;
};
