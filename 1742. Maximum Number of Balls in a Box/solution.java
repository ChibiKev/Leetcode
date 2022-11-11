class Solution {
  public int countBalls(int lowLimit, int highLimit) {
    Map<Integer, Integer> dictionary = new HashMap<>();

    for (int num = lowLimit; num < highLimit + 1; num++){
      int total = 0;
      String stringNum = String.valueOf(num);
      for (int charNum = 0; charNum < stringNum.length(); charNum++){
        total += (int) stringNum.charAt(charNum) - 48;
      }
      
      if (dictionary.containsKey(total)){
        dictionary.put(total, dictionary.get(total) + 1);
      }
      else{
        dictionary.put(total, 1);
      }
    }

    int highestCount = 0;
    for (Map.Entry<Integer, Integer> num : dictionary.entrySet()){
      if (num.getValue() > highestCount){
        highestCount = num.getValue();
      }
    }

    return highestCount;
  }
}