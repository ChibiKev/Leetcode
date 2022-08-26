class Solution {
  public int numDifferentIntegers(String word) {
    Set<String> setOfNumbers = new HashSet<>();

    for (int index = 0; index < word.length(); index++){
      if (Character.isDigit(word.charAt(index))) {
        String number = "";
        while (index < word.length() && word.charAt(index) == '0'){
          index++;          
        }
        while (index < word.length() && Character.isDigit(word.charAt(index))){
          number += word.charAt(index);
          index++;
        }
        setOfNumbers.add(number);
      }
    }

    return setOfNumbers.size();
  }
}