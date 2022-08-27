class Solution {
  public boolean backspaceCompare(String s, String t) {
    String newS = "";
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (letter != '#'){
        newS += letter;
      }
      else{
        if (newS.length() != 0){
          newS = newS.substring(0, newS.length() - 1);
        }
      }
    }

    String newT = "";
    for (int index = 0; index < t.length(); index++){
      Character letter = t.charAt(index);
      if (letter != '#'){
        newT += letter;
      }
      else{
        if (newT.length() != 0){
          newT = newT.substring(0, newT.length() - 1);          
        }
      }
    }

    return newS.equals(newT);
  }
}