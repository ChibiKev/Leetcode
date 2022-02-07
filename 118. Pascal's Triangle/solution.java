class Solution {
  public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> result = new ArrayList<List<Integer>>(Arrays.asList(Arrays.asList(1)));
    for (int number = 1; number < numRows; number++){
      List<Integer> last = result.get(result.size() - 1);
      List<Integer> storage = new ArrayList<Integer>(Arrays.asList(1));
      for (int lastStart = 0; lastStart < last.size() - 1; lastStart++){
        storage.add(last.get(lastStart) + last.get(lastStart + 1));
      }
      storage.add(1);
      result.add(storage);
    }
    return result;
  }
}