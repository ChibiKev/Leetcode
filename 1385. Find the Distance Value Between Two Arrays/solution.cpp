class Solution {
public:
  int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) {
    sort(arr1.begin(), arr1.end());
    sort(arr2.begin(), arr2.end());
    int arr1Index = 0;
    int arr2Index = 0;
    int result = 0;
    while (arr1Index < arr1.size() && arr2Index < arr2.size()){
      int arr1Num = arr1[arr1Index];
      int arr2Num = arr2[arr2Index];
      if (abs(arr1Num - arr2Num) > d){
        if (arr1Num >= arr2Num){
          arr2Index += 1;
          continue;
        }
        else{
          result += 1;
        }
      }
      arr1Index += 1;
    }

    result += arr1.size() - arr1Index;
    return result;
  }
};