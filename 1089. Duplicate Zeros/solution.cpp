class Solution {
public:
  void duplicateZeros(vector<int>& arr) {
    int totalZeros = 0;
    for (int index = 0; index < arr.size(); index++){
      int number = arr[index];
      if (number == 0){
        totalZeros += 1;
      }
    }

    for (int index = arr.size() - 1; index > -1; index--){
      int number = arr[index];
      if (index + totalZeros < arr.size()){
        arr[index + totalZeros] = number;
      }
      if (number == 0){
        totalZeros -= 1;
        if (index + totalZeros < arr.size()){
          arr[index + totalZeros] = 0;
        }
      }
    }
  }
};