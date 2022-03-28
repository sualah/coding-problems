

/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  var prefixProductsValues = {};

  var postFixProductsValues = {};

  var products = [];

  for (var i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefixProductsValues[i] = nums[i];
    } else {
      prefixProductsValues[i] = nums[i] * prefixProductsValues[i - 1];
    }
  }

  for (var i = nums.length; i >= 0; i--) {
    if (i === nums.length - 1) {
      postFixProductsValues[i] = nums[i];
    } else {
      postFixProductsValues[i] = nums[i] * postFixProductsValues[i + 1];
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (i === 0) {
      products.push(postFixProductsValues[1]);
    } else if (i === nums.length - 1) {
      products.push(prefixProductsValues[i - 1]);
    } else {
      products.push(prefixProductsValues[i - 1] * postFixProductsValues[i + 1]);
    }
  }

  return products;
};


//second parameter
var productExceptSelfSecond = function (nums) {
  let leftToRight = [];
  let rightToLeft = [];
  let final = [];
  let cumLeft = 1;
  let cumRight = 1;

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - i - 1;
    cumLeft *= nums[i];
    cumRight *= nums[j];
    leftToRight[i] = cumLeft;
    rightToLeft[j] = cumRight;
  }
  for (let i = 1; i < nums.length - 1; i++) {
    final[i - 1] = leftToRight[i - 1] * rightToLeft[i + 1];
  }
  return [rightToLeft[1], ...final, leftToRight[nums.length - 2]];
};