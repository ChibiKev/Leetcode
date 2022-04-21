/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
  let result = [];
  for (let row = 0; row < image.length; row++){
    let reversedRow = [];
    for (let column = image[row].length - 1; column > -1; column--){
      let number = 0;
      if (image[row][column] === 0){
        number = 1;
      }
      reversedRow.push(number);
    }
    result.push(reversedRow);
  }

  return result;
};