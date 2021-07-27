const moves = [[-1, 0], [1, 0], [0, 1], [0, -1]];

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
};

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

countMoves([2, 3, 4, 5, 6, 7])