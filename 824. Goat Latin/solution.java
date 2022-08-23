class Solution {
  public String toGoatLatin(String sentence) {
    Set<Character> vowels = new HashSet<Character>(Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'));
    
    String[] listOfWords = sentence.split(" ");

    String newSentence = "";
    
    for (int index = 0; index < listOfWords.length; index++){
      String words = listOfWords[index];
      if (!vowels.contains(words.charAt(0))){
        listOfWords[index] = words.substring(1) + words.substring(0,1);
      }
      listOfWords[index] += "ma" + "a".repeat(index + 1);
      newSentence += listOfWords[index];
      if (index != listOfWords.length - 1){
        newSentence += " ";
      }
    }
    
    return newSentence;
  }
}