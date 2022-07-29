/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
  let pathsSet = new Set();
  for (let index = 0; index < paths.length; index++){
    let path = paths[index];
    pathsSet.add(path[0]);
  }

  for (let index = 0; index < paths.length; index++){
    let path = paths[index];
    if (!pathsSet.has(path[1])){
      return path[1];
    }
  }
  return "";
};