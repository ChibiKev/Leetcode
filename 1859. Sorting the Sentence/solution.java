class Solution {
  public String sortSentence(String s) {
    String[] sList = s.split(" ");
    
    String[] result = new String[sList.length];
    Arrays.fill(result, "");

    for (int index = 0; index < sList.length; index++){
      String word = sList[index];
      int index2 = (word.charAt(word.length() - 1) - '0') - 1;
      result[index2] = word.substring(0, word.length() - 1);
    }

    return String.join(" ", result);
  }
}