/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var checkArray = matrix

    var numOfRows = matrix.length;
    //To consider one line case
    var result = [];
    if(numOfRows === 0) {
        return matrix;
    } else if (numOfRows === 1) {
        for(var i = 0 ; i < matrix[0].length ; i ++) {
                result.push(matrix[0][i]);
        }
        return result;
    }
    if (undefined !== matrix[0] && matrix[0].length) {
    var numOfColumns = matrix[0].length;
    
    var totalCount = numOfRows * numOfColumns;
    
    var RIGHT = 0;
    var DOWN = 1;
    var LEFT = 2;
    var UP = 3;
    var direction = RIGHT;
    var currentX = 0;
    var currentY = 0;

    for(var i = 0 ; i < totalCount ; i ++) {
        console.log(matrix[currentX][currentY])
        result.push(matrix[currentX][currentY]);
        checkArray[currentX][currentY] = true
        switch(direction) {
            case RIGHT:
                if(currentY === numOfColumns - 1 || checkArray[currentX][currentY + 1] === true) {
                    direction = DOWN;
                    currentX = currentX + 1;
                } else {
                    currentY = currentY + 1;
                }
                break;
            case DOWN:
                if(currentX === numOfRows - 1 || checkArray[currentX+1][currentY] === true) {
                    direction = LEFT;
                    currentY = currentY - 1;
                } else {
                    currentX = currentX + 1;
                }
                break;
            case LEFT:
                if(currentY === 0 || checkArray[currentX][currentY - 1] === true) {
                    direction = UP;
                    currentX = currentX - 1;
                } else {
                    currentY = currentY - 1;
                }
                break;
            case UP:
                if(currentX === 0 || checkArray[currentX - 1][currentY] === true) {
                    direction = RIGHT;
                    currentY = currentY + 1;
                } else {
                    currentX = currentX - 1;
                }
                break;
            default:
                
        }
    }
    }
    
    return result
};