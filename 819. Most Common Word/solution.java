class Solution {
  public String mostCommonWord(String paragraph, String[] banned) {
    Set<String> bannedSet = new HashSet<>();
    for (int index = 0; index < banned.length; index++){
      bannedSet.add(banned[index]);
    }
    
    Map<String, Integer> dictionary = new HashMap<>();
    String word = "";

    for (int index = 0; index < paragraph.length(); index++){
      Character letter = paragraph.charAt(index);
      if (letter != '!' && letter != '?' && letter != '\'' && letter != ',' && letter != ';' && letter != '.' && letter != ' '){
        word += letter;
      }
      if (letter == '!' || letter == '?' || letter == '\'' || letter == ',' || letter == ';' || letter == '.' || letter == ' '  || index == paragraph.length() - 1){
        if (word == ""){
          continue;
        }
        word = word.toLowerCase();
        if (!bannedSet.contains(word)){
          if (dictionary.containsKey(word)){
            dictionary.put(word, dictionary.get(word) + 1);
          }
          else{
            dictionary.put(word, 1);
          }
        }
        word = "";
      }
    }

    String maxKey = "";
    int maxValue = 0;
    
    for (Map.Entry<String, Integer> key : dictionary.entrySet()){
      if (key.getValue() > maxValue){
        maxKey = key.getKey();
        maxValue = key.getValue();
      }
    }

    return maxKey;
  }
}