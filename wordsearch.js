const transpose = function(matrix) {
    let result = [];
    let resultArray = [];
    if (matrix.length === 0) {
      return [];
    }
    //Felicia
    for (let index = 0; index < matrix[0].length; index++) {
      for (const layerOne of matrix) {
        resultArray.push(layerOne[index]);
      }
      result.push(resultArray);
      resultArray = [];
    }
    return result;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    //onsole.log(verticalJoin);
    //console.log(horizontalJoin);
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (const l of verticalJoin) {
        if (l.includes(word)) return true
    }
    return false;
  };

module.exports = wordSearch;