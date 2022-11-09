class Solution {
  public boolean isHappy(int n) {
    Set<Integer> mySet = new HashSet<>();
    while (n != 1){
      if (!mySet.contains(n)){
        mySet.add(n);
      }
      else{
        return false;
      }

      int total = 0;
      while (n > 0){
        total += (n % 10) * (n % 10);
        n /= 10;
      }
      n = total;
    }
    
    return true;
  }
}