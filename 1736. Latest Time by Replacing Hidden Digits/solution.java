class Solution {
  public String maximumTime(String time) {
    String result = "";
    for (int index = 0; index < time.length(); index++){
      Character value = time.charAt(index);
      if (value == '?'){
        if (index == 0){
          if (time.charAt(1) == '?' || (time.charAt(1) - '0') < 4){
            result += '2';
          }
          else{
            result += '1';          
          }
        }
        else if (index == 1){
          if (time.charAt(0) == '0' || time.charAt(0) == '1'){
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
  }
}