/**
 * @param {number[]} height
 * @return {number}
 * https://leetcode.com/problems/container-with-most-water/submissions/
 */
var maxArea = function (height) {
  let max_area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (height[left] < height[right]) {
      max_area = Math.max(max_area, height[left] * (right - left));
      left += 1;
    } else {
      max_area = Math.max(max_area, height[right] * (right - left));
      right -= 1;
    }
  }

  return max_area;
};
