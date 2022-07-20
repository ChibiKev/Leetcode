class Solution {
  public List<List<Integer>> largeGroupPositions(String s) {
    List<List<Integer>> result = new ArrayList<List<Integer>>();

    int count = 0;
    Character lastLetter = '\0';
    int startIndex = 0;

    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (lastLetter == letter){
        count += 1;
        if (count >= 3 && index == s.length() - 1){
          result.add(Arrays.asList(startIndex, index));
        }
      }
      else{
        if (count >= 3){
          result.add(Arrays.asList(startIndex, index - 1));
        }
        lastLetter = letter;
        count = 1;
        startIndex = index;
      }
    }

    return result;
  }
}