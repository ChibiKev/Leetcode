/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
  let slots = 0;
  let count = 1;
  for (let flower of flowerbed){
    if (flower === 0){
      count += 1;
    }
    else{
      slots += Math.floor((count - 1) / 2);
      count = 0;
    }
  }

  return (slots + Math.floor(count / 2)) >= n;
};