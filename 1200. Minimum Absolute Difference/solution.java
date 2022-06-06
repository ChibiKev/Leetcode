class Solution {
  public List<List<Integer>> minimumAbsDifference(int[] arr) {
    double absoluteDifference = Double.POSITIVE_INFINITY;
    List<List<Integer>> result = new ArrayList<List<Integer>>();
    Arrays.sort(arr);
    for (int index = 0; index < arr.length - 1; index++){
      if (arr[index + 1] - arr[index] < absoluteDifference){
        result.clear();
        result.add(Arrays.asList(arr[index], arr[index + 1]));
        absoluteDifference = arr[index + 1] - arr[index];
      }
      else if (arr[index + 1] - arr[index] == absoluteDifference){
        result.add(Arrays.asList(arr[index], arr[index + 1]));
      }
    }

    return result;
  }
}