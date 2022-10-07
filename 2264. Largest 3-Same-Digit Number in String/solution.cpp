class Solution {
public:
  string largestGoodInteger(string num) {
    string result = "";
    for (int index = 2; index < num.size(); index++){
      if (num[index - 2] == num[index - 1] && num[index - 1] == num[index]){
        if (result == ""){
          result = num.substr(index - 2, 3);
        }
        else if (stoi(num.substr(index - 2, 3)) > stoi(result)){
          result = num.substr(index - 2, 3);
        }
      }
    }
    
    return result;
  }
};