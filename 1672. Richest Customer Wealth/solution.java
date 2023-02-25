class Solution {
  public int maximumWealth(int[][] accounts) {
    int result = 0;
    for (int index = 0; index < accounts.length; index++){
      int[] account = accounts[index];
      int total = 0;
      for (int index2 = 0; index2 < account.length; index2++){
        int money = account[index2];
        total += money;
      }
      if (total > result){
        result = total;
      }
    }
    return result;
  }
}