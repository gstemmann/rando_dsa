

//unroll should return an array of all the values in the square but 
//You should obtain the values by traversing the square in a 
//spiral: from the top-left corner, move all the way to the right, then all the way down, then 
//all the way to the left, then all the way up, and repeat

// size = row * col
// right = martix[0].length - 1
// left = matrix.length  - 1



// size = matrix.length * matrix[0].length
// this can also be wtritten as: size = row * col 
// because rows === the amount of arrays and coulmns === the amount of indeces per array 


//hardcoded on a 3x 3 matrix the right would be 2 and the bottom would be 2 and the 
//size would be 9
const unroll = (matrix) => {
    let size = matrix.length * matrix[0].length
    let newArr = []
    
    let left = 0
    let top = 0

    let right = matrix[0].length - 1
    let bottom = matrix.length - 1

    

    while(newArr.length < size) {
        //the && is to make sure that the loop doesn't go out of bounds
        for(let i = left; i <= right && newArr.length < size; i++) {
            //here we are only changning the column and the "top-row" is remaining static
            newArr.push(matrix[top][i])
        }
        //this takes away the entire top row from the matrix
        top++
        for (let i = top; i <= bottom && newArr.length < size; i++) {
            //here we are only changing the row and the "right-col" is remaining static
            newArr.push(matrix[i][right])
        }
        right --

        for(let i = right; i >= left && newArr.length < size; i--) {
            //here we are now changing the column and the "bottom-row" or "row" is remaining static
            newArr.push(matrix[bottom][i])
        }
        bottom --

        for(let i = bottom; i >= top && newArr.length < size; i--) {
            //here we are only changing the row and the "left-col" is remaining static
            newArr.push(matrix[i][left])
        }
        left ++

    }
    return newArr
}