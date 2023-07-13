/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  let result = 0;
  for (let index = 0; index < details.length; index++){
    let detail = details[index];
    if (parseInt(detail.slice(11,13)) > 60){
      result += 1;
    }
  }
  return result;
};