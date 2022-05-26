class Solution {
public:
  vector<int> relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
    unordered_map<int, int> dictionary;
    vector<int> others;
    unordered_set<int> mySet = unordered_set<int>(arr2.begin(),arr2.end());;
    for (int index = 0; index < arr1.size(); index++){
      int num = arr1[index];
      if (mySet.count(num) == 1){
        dictionary[num]++;
      }
      else{
        others.push_back(num);
      }
    }

    sort(others.begin(), others.end());
    vector<int> result;
    for (int index = 0; index < arr2.size(); index++){
      int num = arr2[index];
      if (dictionary[num]){
        for (int count = 0; count < dictionary[num]; count++){
          result.push_back(num);
        }
      }
    }
    for (int index = 0; index < others.size(); index++){
      result.push_back(others[index]);
    }

    return result;
  }
};