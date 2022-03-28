

// https://leetcode.com/problems/contains-duplicate/


var containsDuplicate = function (nums) {
  var isDuplicate = false;
  var occurances = {};
  for (var i = 0; i < nums.length; i++) {
    if (occurances[nums[i]] !== undefined) {
      occurances[nums[i]] += 1;
      isDuplicate = true;
    } else {
      occurances[nums[i]] = 1;
    }
  }

  return isDuplicate;
};