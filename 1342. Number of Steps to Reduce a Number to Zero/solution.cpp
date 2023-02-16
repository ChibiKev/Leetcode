class Solution {
public:
  int numberOfSteps(int num) {
    int count = 0;
    int tempNumber = num;

    while (tempNumber > 0){
      if (tempNumber % 2 == 0){
        tempNumber /= 2;
      }
      else{
        tempNumber -= 1;
      }
      count += 1;
    }
    
    return count;
  }
};