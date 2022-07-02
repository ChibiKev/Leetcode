class Solution {
  public boolean digitCount(String num) {
    int[] myList = new int[10];
    Arrays.fill(myList, 0);
    for (int index = 0; index < num.length(); index++){
      int value = num.charAt(index) - 48;
      myList[value] += 1;
    }

    for (int index = 0; index < num.length(); index++){
      int value = num.charAt(index) - 48;
      if (myList[index] != value){
        return false;
      }
    }

    return true;
  }
}