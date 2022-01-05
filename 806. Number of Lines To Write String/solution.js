/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
  let row = 1;
  let currentPixels = 0;

  for (let letter of s){
    let pixels = widths[letter.charCodeAt(0) - 97];
    currentPixels += pixels;
    if (currentPixels > 100){
      row += 1;
      currentPixels = pixels;
    }
  }

  return [row, currentPixels];
};