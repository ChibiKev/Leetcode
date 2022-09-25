class Solution {
  public boolean isSumEqual(String firstWord, String secondWord, String targetWord) {
    String firstAddition = "";
    for (int index = 0; index < firstWord.length(); index++){
      Character letter = firstWord.charAt(index);
      firstAddition += (char) ((int) letter - 97 + '0');
    }

    String secondAddition = "";
    for (int index = 0; index < secondWord.length(); index++){
      Character letter = secondWord.charAt(index);
      secondAddition += (char) ((int) letter - 97 + '0');
    }

    String targetAddition = "";
    for (int index = 0; index < targetWord.length(); index++){
      Character letter = targetWord.charAt(index);
      targetAddition += (char) ((int) letter - 97 + '0');
    }

    return Integer.parseInt(firstAddition) + Integer.parseInt(secondAddition) == Integer.parseInt(targetAddition);
  }
}