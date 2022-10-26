class Solution {
  public List<List<Integer>> mergeSimilarItems(int[][] items1, int[][] items2) {
    TreeMap<Integer, Integer> dictionary = new TreeMap<>();
    for (int index = 0; index < items1.length; index++){
      int[] item = items1[index];
      if (dictionary.containsKey(item[0])){
        dictionary.put(item[0], dictionary.get(item[0]) + item[1]);
      }
      else{
        dictionary.put(item[0], item[1]);
      }
    }

    for (int index = 0; index < items2.length; index++){
      int[] item = items2[index];
      if (dictionary.containsKey(item[0])){
        dictionary.put(item[0], dictionary.get(item[0]) + item[1]);
      }
      else{
        dictionary.put(item[0], item[1]);
      }
    }

    List<List<Integer>> ret = new ArrayList<List<Integer>>();

    for (Map.Entry<Integer, Integer> item : dictionary.entrySet()){
      ret.add(Arrays.asList(item.getKey(), item.getValue()));
    }
    
    return ret;
  }
}