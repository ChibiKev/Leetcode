class Solution {
  public int maximumNumberOfStringPairs(String[] words) {
    Set<String> mySet = new HashSet<>();
    int count = 0;

    for (int index = 0; index < words.length; index++){
      String word = words[index];
      if (mySet.contains(word)){
        count += 1;
      }
      else{
        String reverseWord = "";
        for (int index2 = word.length() - 1; index2 > -1; index2--){
          reverseWord += word.charAt(index2);
        }
        mySet.add(reverseWord);
      }
    }

    return count;
  }
}