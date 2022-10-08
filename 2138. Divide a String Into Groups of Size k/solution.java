class Solution {
  public String[] divideString(String s, int k, char fill) {
    List<String> result = new ArrayList<String>();
    String word = "";
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      word += letter;
      if (word.length() == k){
        result.add(word);
        word = "";
      }
    }

    if (word.length() != 0){
      for (int index = word.length(); index < k; index++){
        word += fill;
        if (word.length() == k){
          result.add(word);
        }
      }
    }

    String[] finalResult = new String[result.size()];
    result.toArray(finalResult);
    return finalResult;
  }
}