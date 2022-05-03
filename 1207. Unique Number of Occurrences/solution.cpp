class Solution {
public:
  bool uniqueOccurrences(vector<int>& arr) {
    unordered_map<int, int> dictionary;
    for (int index = 0; index < arr.size(); index++){
      int num = arr[index];
      dictionary[num]++;
    }

    unordered_set<int> mySet;
    for (auto num : dictionary){
      mySet.insert(num.second);
    }

    return mySet.size() == dictionary.size();
  }
};