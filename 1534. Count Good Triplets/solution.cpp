class Solution {
public:
  int countGoodTriplets(vector<int>& arr, int a, int b, int c) {
    int sizeOfArr = arr.size();
    int count = 0;
    for (int i = 0; i < sizeOfArr - 2; i++){
      for (int j = i + 1; j < sizeOfArr - 1; j++){
        for (int k = j + 1; k < sizeOfArr; k++){
          if (abs(arr[i] - arr[j]) <= a && abs(arr[j] - arr[k]) <= b && abs(arr[i] - arr[k]) <= c){
            count += 1;
          }
        }
      }
    }
    return count;
  }
};