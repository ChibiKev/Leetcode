class Solution {
  public String removeDigit(String number, char digit) {
    List<String> result = new ArrayList<>();
    for (int index = 0; index < number.length(); index++){
      Character value = number.charAt(index);
      if (value == digit){
        String temp = number.substring(0, index) + number.substring(index + 1);
        result.add(temp);
      }
    }
    Collections.sort(result);
    return result.get(result.size() - 1);
  }
}