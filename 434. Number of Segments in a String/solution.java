class Solution {
  public int countSegments(String s) {
    int count = 0;
    Boolean found = false;

    for (int index = 0; index < s.length(); index++){
      Character character = s.charAt(index);
      if (character == ' ' && found == true){
        count += 1;
        found = false;
      }
      else if (character != ' '){
        found = true;
      }
    }

    if (found == true){
      return count + 1;
    }

    return count;
  }
}