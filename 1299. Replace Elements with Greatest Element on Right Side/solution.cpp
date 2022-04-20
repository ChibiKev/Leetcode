class Solution {
public:
  vector<int> replaceElements(vector<int>& arr) {
    int largest = -1;
    for (int index = arr.size() - 1; index > -1; index--){
      int current = arr[index];
      arr[index] = largest;
      if (current > largest){
        largest = current;
      }
    }

    return arr;
  }
};