class Solution {
  public String reorderSpaces(String text) {
    String[] words = text.trim().split("\\s+");
    int spaces = 0;
    for (int index = 0; index < text.length(); index++){
      Character letter = text.charAt(index);
      if (letter == ' '){
        spaces += 1;      
      }
    }
    
    int gap = 0;
    if (words.length != 1){
      gap = spaces / (words.length - 1);    
    }
    
    int extraSpaces = spaces - gap * (words.length - 1);
    
    String spacesBetween = "";
    for (int index = 0; index < gap; index++){
      spacesBetween += " ";
    }
    
    String endingSpaces = "";
    for (int index = 0; index < extraSpaces; index++){
      endingSpaces += " ";
    }

    String result = "";
    for (int index = 0; index < words.length; index++){
      String word = words[index];
      result += word;
      if (index != words.length - 1){
        result += spacesBetween;
      }
      else{
        result += endingSpaces;
      }
    }

    return result;
  }
}