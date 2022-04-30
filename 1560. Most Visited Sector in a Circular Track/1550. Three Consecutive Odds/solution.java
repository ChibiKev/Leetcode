class Solution {
  public List<Integer> mostVisited(int n, int[] rounds) {
    List<Integer> result = new ArrayList<Integer>();
    if (rounds[0] == rounds[rounds.length - 1]){
      return Arrays.asList(rounds[0]);
    }
    else if (rounds[0] < rounds[rounds.length - 1]){
      for (int number = rounds[0]; number < rounds[rounds.length - 1] + 1; number++){
        result.add(number);
      }
    }
    else{
      for (int number = 1; number < rounds[rounds.length - 1] + 1; number++){
        result.add(number);
      }
      for (int number = rounds[0]; number < n + 1; number++){
        result.add(number);
      }
    }
    return result;
  }
}