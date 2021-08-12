`
Example

For

m = [[ 1, 4, -2],
     [-2, 3,  4],
     [ 3, 1,  3]]
the output should be

sortMatrixByOccurrences(m) = [[3,  3,  4],
                              [3,  4,  1],
                              [1, -2, -2]]
First we look at the frequency of each number:

Number 1 occurs 2 times;
Number -2 occurs 2 times;
Number 3 occurs 3 times;
Number 4 occurs 2 times.
Because numbers 1, -2, and 4 occur the same number of times, we sort them by their values in ascending order. Number 3 occurs the most numbers of times, so it goes after all other numbers. Finally, after sorting we get the following array: [-2, -2, 1, 1, 4, 4, 3, 3, 3]

After sorting, the numbers should be placed diagonally starting from the bottom right corner, as follows:

[[3,  3,  4],
 [3,  4,  1],
 [1, -2, -2]]
`

const sortMatrixByOccurrences = (m) => {
    let row = m.length;
    let col = m[0].length;

    let obj = {};

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let key = m[i][j];

            if (obj[key]) {
                obj[key]++
            } else {
                obj[key] = 1
            }
        }
    }

    let newObj = {};

    for (let key in obj) {
        let val = obj[key];

        if (newObj[val]) {
            let a = new Array(val).fill(key);
            newObj[val] = newObj[val].concat(a)
        } else {
            let a = new Array(val).fill(key);
            newObj[val] = a
        }
    }
    
    for (let key in newObj) {
        let val = newObj[key]
        val.sort((a, b) => a - b)
    }

    const values = Object.values(newObj);
    let sorted = [].concat(...values);
    let newArr = new Array(row).fill([]);
    
    for (let r = 0; r < row; r++) {
        for (let num = sorted.length - 1; num >= 0; num--) {
            for (let c = 0; c < col; c++) {
                
            }
        }
    }
}

m1 = [[5,4], [4,5]]
// Output: [[5,5], [4,4]]
m2 = [[1]]
// Output: [[1]]
m3 = [[1,4,-2], [-2,3,4], [3,1,3]]
// Output: [[3,3,4], [3,4,1], [1,-2,-2]]
sortMatrixByOccurrences(m3);