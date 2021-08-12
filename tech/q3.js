`
You are given an array of integers arr and an array of queries queries, where each query represents a triple of integers. Your task is to find the number of occurrences of each query as a subsequence in the given array arr.

In other words, for each query triple (x, y, z) your task is to find number of triples (i, j, k), such that 0 ≤ i < j < k < arr.length and also arr[i] = x, arr[j] = y, and arr[k] = z.

Example

For arr = [1, 2, 3, 4, 5] and queries = [[1, 2, 4], [2, 4, 3], [1, 1, 1]], the output should be findTheTriples(arr, queries) = [1, 0, 0].

The first query [1, 2, 4] occurs in arr as a subsequence only once: (i, j, k) = (0, 1, 3) (arr[0] = 1, arr[1] = 2, arr[3] = 4). So, the answer is 1 for the first query.
The second query [2, 4, 3] doesn't occur in arr as a subsequence: all elements of the query exist in arr, but in a different order.
The third query [1, 1, 1] doesn't occur in arr as a subsequence, because arr doesn't contain three 1s.
So the answer is [1, 0, 0].
For arr = [1, 2, 2, 1, 2, 1, 2] and queries = [[1, 1, 2], [1, 2, 1]], the output should be findTheTriples(arr, queries) = [4, 6].

The first query [1, 1, 2] occurs in arr as a subsequence four times:
(i, j, k) = (0, 3, 4): a[0] = 1, a[3] = 1, a[4] = 2;
(i, j, k) = (0, 3, 6): a[0] = 1, a[3] = 1, a[6] = 2;
(i, j, k) = (0, 5, 6): a[0] = 1, a[5] = 1, a[6] = 2;
(i, j, k) = (3, 5, 6): a[3] = 1, a[5] = 1, a[6] = 2.
The second query [1, 2, 1] occurs in arr six times:
(i, j, k) = (0, 1, 3): a[0] = 1, a[1] = 2, a[3] = 1;
(i, j, k) = (0, 1, 5): a[0] = 1, a[1] = 2, a[5] = 1;
(i, j, k) = (0, 2, 3): a[0] = 1, a[2] = 2, a[3] = 1;
(i, j, k) = (0, 2, 5): a[0] = 1, a[2] = 2, a[5] = 1;
(i, j, k) = (0, 4, 5): a[0] = 1, a[4] = 2, a[5] = 1;
(i, j, k) = (3, 4, 5): a[3] = 1, a[4] = 2, a[5] = 1.
So the answer is [4, 6].
For arr = [1, 1, 1, 1] and queries = [[1, 1, 1]], the output should be findTheTriples(arr, queries) = [4].

The only query [1, 1, 1] occurs in arr four times:

(i, j, k) = (0, 1, 2): a[0] = 1, a[1] = 1, a[2] = 1;
(i, j, k) = (0, 1, 3): a[0] = 1, a[1] = 1, a[3] = 1;
(i, j, k) = (0, 2, 3): a[0] = 1, a[2] = 1, a[3] = 1;
(i, j, k) = (1, 2, 3): a[1] = 1, a[2] = 1, a[3] = 1;
So the answer is [4].
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer arr

An array of integers.

Guaranteed constraints:
3 ≤ arr.length ≤ 104,
1 ≤ arr[i] ≤ 104.

[input] array.array.integer queries

An array of queries.

Guaranteed constraints:
1 ≤ queries.length ≤ 100,
queries[i].length = 3,
1 ≤ queries[i][j] ≤ 104.

[output] array.integer64

An array of integers, where the ith element is the answer for ith query.

[JavaScript] Syntax Tips
`

const findTheTriples = (arr, queries) => {
    let a = [];

    for (let i = 0; i < queries.length; i++) {
        
    }

    return a;
}

arr1 = [1, 2, 3, 4, 5]
queries1 = [
    [1,2,4], 
    [2,4,3], 
    [1,1,1]
]
// Output: [1, 0, 0]

arr2 = [1, 2, 2, 1, 2, 1, 2]
queries2 = [
    [1,1,2], 
    [1,2,1]
]
// Output: [4, 6]

arr3 = [1, 1, 1, 1]
queries3 = [[1,1,1]]
// Output: [4]

arr4 = [1, 2, 3]
queries4 = [[1,2,3]]
// Output: [1]

console.log(findTheTriples(arr1, queries1));
console.log(findTheTriples(arr2, queries2));
console.log(findTheTriples(arr3, queries3));
console.log(findTheTriples(arr4, queries4));