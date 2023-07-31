class Solution {
  public List<String> splitWordsBySeparator(List<String> words, char separator) {
    List<String> result = new ArrayList<String>();
    for (int index = 0; index < words.size(); index++){
      String word = words.get(index);
      String[] splitWord = word.split("["+separator+"]");
      for (int index2 = 0; index2 < splitWord.length; index2++){
        String split = splitWord[index2];
        if (split.length() != 0){
          result.add(split);
        }
      }
    }
    return result;
  }
}