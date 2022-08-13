class Solution {
  public boolean checkRecord(String s) {
    int A = 0;
    int L = 0;

    for (int index = 0; index < s.length(); index++){
      Character value = s.charAt(index);
      if (value == 'A'){
        A += 1;      
      }
      else if (value == 'L' && L < 3){
        if (index > 0 && s.charAt(index - 1) == 'L'){
          L += 1;
        }
        else{
          L = 1;        
        }
      }
    }

    return !(A >= 2) && !(L >= 3);
  }
}