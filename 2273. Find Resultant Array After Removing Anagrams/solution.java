class Solution {
  public List<String> removeAnagrams(String[] words) {
    List<String> newWords = new ArrayList<String>();;
    for (int index = 0; index < words.length; index++){
      String word = words[index];
      char[] chars = word.toCharArray();
      Arrays.sort(chars);
      String sortedWord = new String(chars);
      newWords.add(sortedWord);
    }

    List<String> result = new ArrayList<String>(Arrays.asList(words[0]));
    for (int index = 1; index < newWords.size(); index++){
      String word = newWords.get(index);
      if (!word.equals(newWords.get(index - 1))){
        result.add(words[index]);
      }
    }

    return result;
  }
}