class Solution {
  public int romanToInt(String s) {
    int index = 0;
    int result = 0;
    Map<String, Integer> dictionary = new HashMap<String, Integer>(){{
      put("I", 1);
      put("IV", 4);
      put("V", 5);
      put("IX", 9);
      put("X", 10);
      put("XL", 40);
      put("L", 50);
      put("XC", 90);
      put("C", 100);
      put("CD", 400);
      put("D", 500);
      put("CM", 900);
      put("M", 1000);
    }};
    while (index < s.length()){
      if (index + 1 < s.length() && dictionary.containsKey("" + s.charAt(index) + s.charAt(index + 1))){
        result += dictionary.get("" + s.charAt(index) + s.charAt(index + 1));
        index += 2;
      }
      else{
        result += dictionary.get("" + s.charAt(index));
        index += 1;
      }
    }
    return result;
  }
}