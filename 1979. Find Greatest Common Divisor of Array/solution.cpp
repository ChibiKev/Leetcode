class Solution {
public:
  int findGCD(vector<int>& nums) {
    int smallestNumber = INT_MAX;
    int largestNumber = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (smallestNumber > num){
        smallestNumber = num;
      }
      if (largestNumber < num){
        largestNumber = num;
      }
    }

    while (smallestNumber){
      int temp = largestNumber;
      largestNumber = smallestNumber;
      smallestNumber = temp % smallestNumber;
    }

    return largestNumber;
  }
};