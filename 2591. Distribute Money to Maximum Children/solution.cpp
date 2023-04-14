class Solution {
public:
  int distMoney(int money, int children) {
    int remainingMoney = money - children;
    if (remainingMoney < 0){
      return -1;
    }
    if (remainingMoney / 7 == children && remainingMoney % 7 == 0){
      return children;
    }
    if (remainingMoney / 7 == children - 1 && remainingMoney % 7 == 3){
      return children - 2;
    }
    
    int result = children - 1;
    if (remainingMoney / 7 < result){
      result = remainingMoney / 7;
    }
    return result;
  }
};