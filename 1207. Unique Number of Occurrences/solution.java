class Solution {
  public boolean uniqueOccurrences(int[] arr) {
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

    Set<Integer> mySet = new HashSet<>();
    for (Map.Entry<Integer, Integer> num : dictionary.entrySet()){
      mySet.add(num.getValue());
    }

    return mySet.size() == dictionary.size();
  }
}