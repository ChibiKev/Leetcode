class Solution {
  public List<String> cellsInRange(String s) {
    List<String> result = new ArrayList<String>();

    for (Character column = s.charAt(0); column <= s.charAt(3); column++){
      for (Character row = s.charAt(1); row <= s.charAt(4); row++){
        result.add("" + column + row);
      }
    }

    return result;
  }
}