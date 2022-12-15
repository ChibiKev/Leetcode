/**
 * @param {number} area
 * @return {number[]}
 */
 var constructRectangle = function(area) {
  let width = Math.floor(Math.sqrt(area));
  while (area % width != 0){
    width -= 1;
  }
  
  return [area / width, width];
};