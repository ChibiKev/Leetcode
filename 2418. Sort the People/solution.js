/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
 var sortPeople = function(names, heights) {
  let dictionary = {};
  for (let index = 0; index < names.length; index++){
    let name = names[index];
    let height = heights[index];
    dictionary[height] = name;
  }

  heights.sort(function(a, b){return b-a});

  let result = [];
  for (let index = 0; index < heights.length; index++){
    let height = heights[index];
    result.push(dictionary[height]);
  }

  return result;
};