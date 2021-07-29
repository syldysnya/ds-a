var networkDelayTime = function(times, n, k) {
    let arr = new Array(n + 1).fill(Infinity);
    arr[k] = 0;
    
    for (let i = 0; i <arr.length; i++) {
        for (const [u, v, w] of times) {
            if (arr[u] === Infinity) continue;
            if (arr[v] > arr[u] + w) {
                arr[v] = arr[u] + w
            }
        }
    }
    
    res = 0;
    
    for (let i = 1; i <= n; i++) {
        res = Math.max(res, arr[i])
    }
    
    return res === Infinity ? -1 : res
};