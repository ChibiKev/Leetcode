/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
 var isLongPressedName = function(name, typed) {
  let nameIndex = 0;

  for (let index = 0; index < typed.length; index++){
    let letter = typed[index];
    if (nameIndex < name.length){
      if (name[nameIndex] == letter){
        nameIndex += 1;
        continue;
      }
    }
    if (index == 0 || letter != typed[index - 1]){
      return false;
    }
  }

  return nameIndex == name.length;
};