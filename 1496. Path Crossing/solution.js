/**
 * @param {string} path
 * @return {boolean}
 */
 var isPathCrossing = function(path) {
  let x = 0;
  let y = 0;

  let mySet = new Set(["0,0"]);

  for (let index = 0; index < path.length; index++){
    let letter = path[index];
    if (letter == 'N'){
      y += 1;
    }
    else if (letter == 'S'){
      y -= 1;      
    }
    else if (letter == 'E'){
      x += 1;
    }
    else if (letter == 'W'){
      x -= 1;
    }
    let current = x + "," + y;
    if (mySet.has(current)){
      return true;      
    }
    mySet.add(current);
  }

  return false;
};