```const moves = [[-1, 0], [1, 0], [0, 1], [0, -1]];

function reachTheEnd(grid, maxTime, pos = [0, 0]) {
    // . . # #
    // # . # #
    // # . . .
    if (pos === grid[grid.length - 1, grid[0].length - 1] && maxTime > 0) return 'Yes';
    
    let arr = [];
    
    for (let i = 0; i < moves.length; i++) {
        let row = pos[0] + moves[i][0];
        let col = pos[1] + moves[i][1];
        
        if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] === '.') {
            arr.push([row, col])
        }
    }
    
    let mapped = arr.map(ele => {
        return reachTheEnd(grid, maxTime - 1, pos = ele)
    })
    
    mapped.forEach(ele => {
        if (ele) return ele
    })
    
    return 'No';
};```

let grid = ['..', '..'];

function countMoves(numbers) {
    if (numbers == null || numbers.length <= 1) return 0;
    
    let min = numbers[0]
    let sum = 0
    
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
        min = Math.min(min, numbers[i])
    }
    return sum - min * numbers.length
}

countMoves([2, 3, 4, 5, 6, 7]);

'695. Max Area of Island'

var maxAreaOfIsland = function(grid) {
    let biggest = 0;
    let count;
    let rows = grid.length;
    let cols = grid[0].length;
    
    const recursionFunc = (i, j) => {
        if (i < rows && i >= 0 && j < cols && j >= 0 && grid[i][j] > 0) {
            count++;
            grid[i][j] = -1;
            
            recursionFunc(i + 1, j, count);
            recursionFunc(i - 1, j, count);
            recursionFunc(i, j + 1, count);
            recursionFunc(i, j - 1, count);
        }
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0) {
                count = 0;
                recursionFunc(i, j, count);
                biggest = Math.max(biggest, count)
            }
        }
    }
    
    return biggest
};


'200. Number of Islands'

var numIslands = function(grid) {
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                recursionFunc(i, j, grid);
            }
        }
    }
    
    return count
};

var isValid = function(i, j, grid) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
        return false
    }
    
    return true
}

var recursionFunc = function(i, j, grid) {
    if (!isValid(i, j, grid) || grid[i][j] === '0') return;
    
    grid[i][j] = '0';
    
    recursionFunc(i + 1, j, grid);
    recursionFunc(i - 1, j, grid);
    recursionFunc(i, j + 1, grid);
    recursionFunc(i, j - 1, grid);
};

'1254. Number of Closed Islands'

var closedIsland = function(grid) {
    let total = 0;
    let count;
    let rows = grid.length;
    let cols = grid[0].length;
    
    const recursionFunc = (i, j) => {
        if (i < 0 || j < 0 || i >= rows || j >= cols) {
            count = Number.NEGATIVE_INFINITY;
            return
        };
        if (grid[i][j] === -1) return;
        if (grid[i][j] > 0) {
            count++;
            return
        }
        
        grid[i][j] = -1;
        
        recursionFunc(i + 1, j, count);
        recursionFunc(i - 1, j, count);
        recursionFunc(i, j - 1, count);
        recursionFunc(i, j + 1, count);
    };
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 0) {
                count = 0;
                recursionFunc(i, j, count);
                if (count >= 4) total++
            };
        };
    };
    
    return total;
};
