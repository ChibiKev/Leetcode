class Solution {
public:
  string maximumTime(string time) {
    string result = "";
    for (int index = 0; index < time.size(); index++){
      char value = time[index];
      if (value == '?'){
        if (index == 0){
          if (time[1] == '?' || (time[1] - '0') < 4){
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
  }
};