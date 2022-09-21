/**
 * @param {string} time
 * @return {string}
 */
 var maximumTime = function(time) {
  let result = "";
  for (let index = 0; index < time.length; index++){
    let value = time[index];
    if (value == '?'){
      if (index == 0){
        if (time[1] == '?' || parseInt(time[1]) < 4){
          result += '2';
        }
        else{
          result += '1';          
        }
      }
      else if (index == 1){
        if (time[0] == '0' || time[0] == '1'){
          result += '9';
        }
        else{
          result += '3';          
        }
      }
      else if (index == 3){
        result += '5';        
      }
      else if (index == 4){
        result += '9';        
      }
    }
    else{
      result += value;      
    }
  }

  return result;
};