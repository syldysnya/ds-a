// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
    let arr = [];
    
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    
    return arr[n]
}