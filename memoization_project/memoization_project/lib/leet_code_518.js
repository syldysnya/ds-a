// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function(amount, coins) {
    if(!coins || coins.length===0) return 0
    let newArr = new Array(amount+1).fill(0);
    newArr[0] = 1;
    
    for(let coin of coins){ // 2
        for(let i = 1; i <= amount; i++){ // 2
            if (i >= coin) {
                newArr[i] += newArr[i-coin]
            }
        }
    }
    return newArr[amount]
};