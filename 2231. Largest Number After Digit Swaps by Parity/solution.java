class Solution {
  public int largestInteger(int num) {
    String stringNum = String.valueOf(num);
    PriorityQueue<Character> evenNum = new PriorityQueue<Character>((a, b) -> (b - a));
    PriorityQueue<Character> oddNum = new PriorityQueue<Character>((a, b) -> (b - a));
    for (int index = 0; index < stringNum.length(); index++){
      int value = (int) stringNum.charAt(index);
      if (value % 2 == 0){
        evenNum.add(stringNum.charAt(index));
      }
      else{
        oddNum.add(stringNum.charAt(index));
      }
    }

    String result = "";
    for (int index = 0; index < stringNum.length(); index++){
      int value = (int) stringNum.charAt(index);
      if (value % 2 == 0){
        result += evenNum.poll();
      }
      else{
        result += oddNum.poll();
      }
    }

    return Integer.parseInt(result);
  }
}