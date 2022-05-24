class Solution {
public:
  vector<int> findKDistantIndices(vector<int>& nums, int key, int k) {
    vector<int> keys;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (key == num){
        keys.push_back(index);
      }
    }

    int keyIndex = 0;
    vector<int> result;
    for (int index = 0; index < nums.size(); index++){
      if (keyIndex < keys.size()){
        if (abs(index - keys[keyIndex]) <= k){
          result.push_back(index);
        }
        else if (keyIndex + 1 < keys.size()){
          if (abs(index - keys[keyIndex + 1]) <= k){
            keyIndex += 1;
            result.push_back(index);
          }
        }
      }
    }

    return result;
  }
};