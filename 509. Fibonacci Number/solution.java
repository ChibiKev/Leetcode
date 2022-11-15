class Solution {
  public int fib(int n) {
    List<Integer> memo = new ArrayList<Integer>();
    for (int index = 0; index < n + 1; index++){
      if (index == 0 || index == 1){
        memo.add(index);
      }
      else{
        memo.add(memo.get(index - 1) + memo.get(index - 2));
      }
    }
    return memo.get(memo.size() - 1);
  }
}