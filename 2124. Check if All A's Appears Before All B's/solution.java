class Solution {
  public boolean checkString(String s) {
    char[] sList = s.toCharArray();
    Arrays.sort(sList);
    String sortedS = new String(sList);
    return sortedS.equals(s);
  }
}