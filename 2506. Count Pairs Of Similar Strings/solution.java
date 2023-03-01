class Solution {
  public int similarPairs(String[] words) {
    Map<String, Integer> dictionary = new HashMap<String, Integer>();
    for (int index = 0; index < words.length; index++){
      String word = words[index];
      Set<Character> wordsSet = new HashSet<>();
      for (int index2 = 0; index2 < word.length(); index2++){
        Character letter = word.charAt(index2);
        wordsSet.add(letter);
      }
      String wordSorted = "";
      for (char letter : wordsSet){
        wordSorted += letter;
      }
      if (dictionary.containsKey(wordSorted)){
        dictionary.put(wordSorted, dictionary.get(wordSorted) + 1);
      }
      else{
        dictionary.put(wordSorted, 1);
      }
    }

    int result = 0;
    for (Map.Entry<String, Integer> word : dictionary.entrySet()){
      int count = word.getValue();
      result += (count * (count - 1)) / 2;
    }
    return result;
  }
}