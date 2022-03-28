/**
 * https://leetcode.com/problems/two-sum/
 * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var value = nums[i];
    var pair = target - value;
    if (map[pair] !== undefined) {
      return [map[pair], i];
    } else {
      map[value] = i;
    }
  }
};
