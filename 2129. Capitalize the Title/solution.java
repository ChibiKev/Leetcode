class Solution {
  public String capitalizeTitle(String title) {
    String[] words = title.split(" ");

    for (int index = 0; index < words.length; index++){
      String word = words[index];
      if (word.length() > 2){
        words[index] = Character.toUpperCase(word.charAt(0)) + word.substring(1).toLowerCase();
      }
      else{
        words[index] = word.toLowerCase();      
      }
    }
    
    return String.join(" ", words);
  }
}