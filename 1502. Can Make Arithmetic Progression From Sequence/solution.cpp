class Solution {
public:
  bool canMakeArithmeticProgression(vector<int>& arr) {
    sort(arr.begin(), arr.end());
    int difference = arr[1] - arr[0];

    for (int index = 0; index < arr.size() - 1; index++){
      int value = arr[index];
      int nextValue = arr[index + 1];
      if (nextValue - value != difference){
        return false;
      }
    }

    return true;
  }
};