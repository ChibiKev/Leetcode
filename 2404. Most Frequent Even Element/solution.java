class Solution {
  public int mostFrequentEven(int[] nums) {
    Map<Integer, Integer> dictionary = new HashMap<>();
    for (int index = 0; index < nums.length; index++){
      int num = nums[index];
      if (dictionary.containsKey(num)){
        dictionary.put(num, dictionary.get(num) + 1);
      }
      else{
        dictionary.put(num, 1);
      }
    }
    
    int minimumValue = -1;
    int maximumFrequency = 0;

    for (Map.Entry<Integer, Integer> num : dictionary.entrySet()){
      if (num.getKey() % 2 == 0){
        if (num.getValue() > maximumFrequency){
          minimumValue = num.getKey();
          maximumFrequency = num.getValue();
        }
        else if (num.getValue() == maximumFrequency){
          if (num.getKey() < minimumValue){
            minimumValue = num.getKey();
          }
        }
      }
    }
    
    return minimumValue;
  }
}