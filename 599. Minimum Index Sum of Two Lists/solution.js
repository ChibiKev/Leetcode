/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 var findRestaurant = function(list1, list2) {
    let firstDictionary = {}
    let secondDictionary = {}
    for (let index in list1){
      firstDictionary[list1[index]] = index;
    }
  
    for (let index in list2){
      let word = list2[index];
      if (firstDictionary[word]){
        secondDictionary[word] = +firstDictionary[word] + +index;
      }
    }
    let minimum = [];
    let minimumValue = Infinity;
    for (let key in secondDictionary){
      if (secondDictionary[key] == minimumValue){
        minimum.push(key);
      }
      else if (secondDictionary[key] < minimumValue){
        minimum = [key];
        minimumValue = secondDictionary[key];
      }
    }
  
    return minimum;
  };