class Solution {
  public String convertToTitle(int columnNumber) {
    Character letters[] = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};

    String result = "";
    while (columnNumber > 0){
      result += letters[(columnNumber - 1) % 26];
      columnNumber = (columnNumber - 1) / 26;
    }

    String reversedResult = "";
    for (int index = result.length() - 1; index >  -1; index--){
      reversedResult += result.charAt(index);
    }
    return reversedResult;
  }
}