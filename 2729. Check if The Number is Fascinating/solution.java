class Solution {
  public boolean isFascinating(int n) {
    int timesTwo = n * 2;
    int timesThree = n * 3;
    String concat = String.valueOf(n) + String.valueOf(timesTwo) + String.valueOf(timesThree);
    Set<Character> concatSet = new HashSet<>();
    for (int index = 0; index < concat.length(); index++){
      concatSet.add(concat.charAt(index));
    }
    return (concatSet.size() == 9) && (concat.length() == 9) && (!concatSet.contains('0'));
  }
}