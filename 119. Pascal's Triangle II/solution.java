class Solution {
  public List<Integer> getRow(int rowIndex) {
    List<Integer> current = new ArrayList<Integer>(Arrays.asList(1));
    for (int iteration = 0; iteration < rowIndex; iteration++){
      List<Integer> storage = new ArrayList<Integer>(Arrays.asList(1));
      for (int index = 0; index < current.size() - 1; index++){
        storage.add(current.get(index) + current.get(index + 1));
      }
      storage.add(1);
      current = storage;
    }
    return current;
  }
}