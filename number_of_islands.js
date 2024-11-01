var numIslands = function(grid) {
    if(grid === null) return 0
    let numOfIslands = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === "1"){
                numOfIslands++;
                turnIslandToWater(grid, i , j)
            }
        }
    }
    console.log(numOfIslands)
    return numOfIslands
};

let turnIslandToWater = (grid, i ,j) => {
    if(i < 0 || j < 0 || grid[i][j] === "0" || i >= grid.length || j >= grid[0].length) return;

    grid[i][j] = "0"
    turnIslandToWater(grid, i + 1, j)
    turnIslandToWater(grid, i - 1, j)
    turnIslandToWater(grid, i, j + 1)
    turnIslandToWater(grid, i, j - 1)
}

let grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]
numIslands(grid)