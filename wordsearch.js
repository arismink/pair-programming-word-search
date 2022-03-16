const transpose = function(matrix) {
    let newArr = [];
    for (let i = 0; i < matrix[0].length; i++) { //Makes a row for every column within the matrix
      newArr.push([]);
    }
  
    for (let row = 0; row < matrix.length; row ++) { //Filters through the rows of the matrix
      for (let col = 0; col < matrix[row].length; col ++) { //Filters through each column of the row
        newArr[col][row] = matrix[row][col]; //returns the column value into the newArr row value.
      }
    }
    return newArr;
  };
  
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    
    const verticalJoin = transpose(letters).map(ls => ls.join(''));

    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

    const reverseJoin = letters.map(ls => ls.reverse().join(''));
    
    for (l of reverseJoin) {
        if (l.includes(word)) return true;
    }
    
    return false; 
}

module.exports = wordSearch;

// ['A', 'W', 'C', 'Y', 'R', 'R', 'A', 'L'],
// ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
// ['Y', 'F', 'C', 'F', 'Q', 'U', 'g', 'L'],
// ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
// ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
// ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
// ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
// ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
// ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'LARRY')