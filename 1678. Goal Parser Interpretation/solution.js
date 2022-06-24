/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
  let result = "";
  let index = 0;
  while (index < command.length){
    let letter = command[index];
    if (letter == "G"){
      result += "G";
      index += 1;
    }
    else if (letter == "("){
      let nextLetter = command[index + 1];
      if (nextLetter == ")"){
        result += "o";
        index += 2;
      }
      else if (nextLetter == "a"){
        result += "al";
        index += 4;
      }
    }
  }

  return result;
};