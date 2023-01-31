class Solution {
  public String longestCommonPrefix(String[] strs) {
    Arrays.sort(strs);

    int lowestCount = strs[0].length();
    for (int index = 0; index < strs.length; index++){
      String strings = strs[index];
      if (strings.length() < lowestCount){
        lowestCount = strings.length();
      }
    }
    
    String firstStr = strs[0];
    String lastStr = strs[strs.length - 1];
    String prefix = "";
    for (int index = 0; index < lowestCount; index++){
      if (firstStr.charAt(index) == lastStr.charAt(index)){
        prefix += firstStr.charAt(index);
      }
      else{
        break;
      }
    }
    return prefix;
  }
}