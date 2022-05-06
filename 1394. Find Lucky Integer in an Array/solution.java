class Solution {
  public int findLucky(int[] arr) {
    Map<Integer, Integer> dictionary = new HashMap<>();
    for (int index = 0; index < arr.length; index++){
      int num = arr[index];
      if (dictionary.containsKey(num)){
        dictionary.put(num, dictionary.get(num) + 1);
      }
      else{
        dictionary.put(num, 1);
      }
    }
    
    int maxValue = -1;
    for (Map.Entry<Integer, Integer> num : dictionary.entrySet()){
      if (num.getKey() == num.getValue() && num.getValue() > maxValue){
        maxValue = num.getValue();
      }
    }
    return maxValue;
  }
}