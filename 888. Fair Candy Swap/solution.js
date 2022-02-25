/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
 var fairCandySwap = function(aliceSizes, bobSizes) {
  let aliceTotal = 0;
  let bobTotal = 0;
  for (let alice of aliceSizes){
    aliceTotal += alice
  }
  for (let bob of bobSizes){
    bobTotal += bob;
  }

  let difference = Math.floor((aliceTotal - bobTotal) / 2);
  let aliceSet = new Set(aliceSizes);
  for (let bob of bobSizes){
    let find = bob + difference;
    if (aliceSet.has(find)){
      return [find, bob];
    }
  }
};