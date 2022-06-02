class Solution {
public:
  bool canThreePartsEqualSum(vector<int>& arr) {
    int left = arr[0];
    int right = arr[arr.size() - 1];
    int total = 0;
    for (int index = 0; index < arr.size(); index++){
      int num = arr[index];
      total += num;
    }

    if (total % 3 != 0){
      return false;
    }

    int leftIndex = 1;
    int rightIndex = arr.size() - 2;
    int average = total / 3;
    while (leftIndex < rightIndex){
      if (leftIndex < rightIndex && left != average){
        left += arr[leftIndex];
        leftIndex += 1;
      }
      if (leftIndex < rightIndex && right != average){
        right += arr[rightIndex];
        rightIndex -= 1;
      }
      if (left == average && right == average){
        return true;
      }
    }
    return false;
  }
};