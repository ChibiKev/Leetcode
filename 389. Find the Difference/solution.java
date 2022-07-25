class Solution {
  public char findTheDifference(String s, String t) {
    char[] sList = s.toCharArray();
    Arrays.sort(sList);
    String sortedS = new String(sList);
    
    char[] tList = t.toCharArray();
    Arrays.sort(tList);
    String sortedT = new String(tList);
    
    for (int index = 0; index < sortedS.length(); index++){
      char sLetter = sortedS.charAt(index);
      char tLetter = sortedT.charAt(index);
      if (sLetter != tLetter){
        return tLetter;
      }
    }

    return sortedT.charAt(sortedT.length() - 1);
  }
}