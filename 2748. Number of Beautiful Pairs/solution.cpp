class Solution {
public:
  int countBeautifulPairs(vector<int>& nums) {
    int count = 0;
    
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      int firstDigit = num;
      while (firstDigit >= 10){
        firstDigit = firstDigit / 10;
      }
      for (int index2 = index + 1; index2 < nums.size(); index2++){
        int lastDigit = nums[index2] % 10;
        int currentFirstDigit = firstDigit;
        while (lastDigit != 0){
          int temp = currentFirstDigit % lastDigit;
          currentFirstDigit = lastDigit;
          lastDigit = temp;
        }
        count += (currentFirstDigit == 1);
      }
    }
    
    return count;
  }
};