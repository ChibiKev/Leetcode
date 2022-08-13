class Solution {
public:
  bool checkRecord(string s) {
    int A = 0;
    int L = 0;

    for (int index = 0; index < s.size(); index++){
      char value = s[index];
      if (value == 'A'){
        A += 1;      
      }
      else if (value == 'L' && L < 3){
        if (index > 0 && s[index - 1] == 'L'){
          L += 1;
        }
        else{
          L = 1;        
        }
      }
    }

    return !(A >= 2) && !(L >= 3);
  }
};