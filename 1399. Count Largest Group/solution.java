class Solution {
  public int countLargestGroup(int n) {
    Map<Integer, Integer> dictionary = new HashMap<>();

    for (int index = 1; index < n + 1; index++){
      int total = 0;
      String stringIndex = String.valueOf(index);
      for (int charIndex = 0; charIndex < stringIndex.length(); charIndex++){
        total += (int) stringIndex.charAt(charIndex) - 48;
      }
      
      if (dictionary.containsKey(total)){
        dictionary.put(total, dictionary.get(total) + 1);
      }
      else{
        dictionary.put(total, 1);
      }
    }

    int totalCount = 0;
    int highestCount = 0;
    for (Map.Entry<Integer, Integer> num : dictionary.entrySet()){
      if (num.getValue() > highestCount){
        highestCount = num.getValue();
        totalCount = 1;
      }
      else if (num.getValue() == highestCount){
        totalCount += 1;
      }
    }

    return totalCount;
  }
}