/**
 * 
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const sellingPrice = prices[i];
    const profit = sellingPrice - buy;

    max = Math.max(max, profit);
    buy = Math.min(buy, prices[i]);
  }

  return max;
};
