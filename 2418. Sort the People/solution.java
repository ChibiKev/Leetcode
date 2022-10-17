class Solution {
  public String[] sortPeople(String[] names, int[] heights) {
    Map<Integer, String> dictionary = new HashMap<>();
    for (int index = 0; index < names.length; index++){
      String name = names[index];
      int height = heights[index];
      dictionary.put(height, name);
    }

    Arrays.sort(heights);

    String[] result = new String[names.length];
    for (int index = heights.length - 1; index > -1; index--){
      int height = heights[index];
      result[heights.length - index - 1] = dictionary.get(height);
    }

    return result;
  }
}