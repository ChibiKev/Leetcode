class Solution {
public:
  bool isHappy(int n) {
    unordered_set<int> mySet;
    while (n != 1){
      if (mySet.count(n) == 0){
        mySet.insert(n);
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
};