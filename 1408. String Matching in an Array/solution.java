class Solution {
  public List<String> stringMatching(String[] words) {
    Arrays.sort(words, (a,b) -> a.length() - b.length());
    
    List<String> result = new ArrayList<>();
    for (int index = 0; index < words.length; index++){
      for (int index2 = index + 1; index2 < words.length; index2++){
        if (words[index2].indexOf(words[index]) != -1){
          result.add(words[index]);
          break;
        }
      }
    }

    return result;
  }
}