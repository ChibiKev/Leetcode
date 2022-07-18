class Solution {
  public boolean isLongPressedName(String name, String typed) {
    int nameIndex = 0;

    for (int index = 0; index < typed.length(); index++){
      Character letter = typed.charAt(index);
      if (nameIndex < name.length()){
        if (name.charAt(nameIndex) == letter){
          nameIndex += 1;
          continue;
        }
      }
      if (index == 0 || letter != typed.charAt(index - 1)){
        return false;
      }
    }

    return nameIndex == name.length();
  }
}