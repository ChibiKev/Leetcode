class Solution {
  public String[] uncommonFromSentences(String s1, String s2) {
    Set<String> banned = new HashSet<>();
    Set<String> uncommon = new HashSet<>();

    String[] s1Words = s1.split(" ");

    for (int index = 0; index < s1Words.length; index++){
      String word = s1Words[index];
      if (uncommon.contains(word)){
        banned.add(word);
        uncommon.remove(word);
      }
      else if (!banned.contains(word) && !uncommon.contains(word)){
        uncommon.add(word);      
      }
    }

    String[] s2Words = s2.split(" ");

    for (int index = 0; index < s2Words.length; index++){
      String word = s2Words[index];
      if (uncommon.contains(word)){
        banned.add(word);
        uncommon.remove(word);
      }
      else if (!banned.contains(word) && !uncommon.contains(word)){
        uncommon.add(word);      
      }
    }
    
    String[] result = new String[uncommon.size()];
    int index = 0;
    
    for (String word : uncommon){
      result[index] = word;
      index++;
    }
    
    return result;
  }
}