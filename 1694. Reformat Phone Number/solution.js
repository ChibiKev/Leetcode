/**
 * @param {string} number
 * @return {string}
 */
 var reformatNumber = function(number) {
  let formatted = number.replace(/[^0-9]/g, "");
  let result = "";
  for (let index = 0; index < formatted.length; index++){
    let number = formatted[index];
    if (formatted.length - index < 5 && (formatted.length < 5 || result[result.length - 1] == "-")){
      if (formatted.length - index == 2){
        result += formatted.slice(index, index + 2);
      }
      else if (formatted.length - index == 3){
        result += formatted.slice(index, index + 3);
      }
      else if (formatted.length - index == 4){
        result += formatted.slice(index, index + 2) + "-" + formatted.slice(index + 2, index + 4);
      }
      break;
    }
    result += number;
    if ((index + 1) % 3 == 0){
      result += "-";
    }
  }
  return result;
};