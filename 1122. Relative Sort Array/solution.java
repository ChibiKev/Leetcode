class Solution {
  public int[] relativeSortArray(int[] arr1, int[] arr2) {
    Map<Integer, Integer> dictionary = new HashMap<>();
    List<Integer> others = new ArrayList<Integer>();
    Set<Integer> mySet = new HashSet<>();
    for (int index = 0; index < arr2.length; index++){
      mySet.add(arr2[index]);
    }
    for (int index = 0; index < arr1.length; index++){
      int num = arr1[index];
      if (dictionary.containsKey(num) && mySet.contains(num)){
        dictionary.put(num, dictionary.get(num) + 1);
      }
      else if (!dictionary.containsKey(num) && mySet.contains(num)){
        dictionary.put(num, 1);
      }
      else{
        others.add(num);
      }
    }
    
    Collections.sort(others);
    List<Integer> result = new ArrayList<Integer>();
    for (int index = 0; index < arr2.length; index++){
      int num = arr2[index];
      if (dictionary.containsKey(num)){
        for (int count = 0; count < dictionary.get(num); count++){
          result.add(num);
        }
      }
    }
    for (int index = 0; index < others.size(); index++){
      result.add(others.get(index));
    }

    return result.stream().mapToInt(i -> i).toArray();
  }
}