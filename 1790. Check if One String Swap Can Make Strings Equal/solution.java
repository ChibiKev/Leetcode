class Solution {
  public boolean areAlmostEqual(String s1, String s2) {
    List<Integer> different = new ArrayList<Integer>();
    for (int index = 0; index < s1.length(); index++){
      if (s1.charAt(index) != s2.charAt(index)){
        different.add(index);
      }
      if (different.size() > 2){
        return false;
      }
    }
    return different.size() == 0 || (different.size() == 2 && s1.charAt(different.get(0)) == s2.charAt(different.get(1)) && s1.charAt(different.get(1)) == s2.charAt(different.get(0)));
  }
}