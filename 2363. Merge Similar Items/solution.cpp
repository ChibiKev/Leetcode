class Solution {
public:
  vector<vector<int>> mergeSimilarItems(vector<vector<int>>& items1, vector<vector<int>>& items2) {
    map<int, int> dictionary;
    for (int index = 0; index < items1.size(); index++){
      vector<int> item = items1[index];
      dictionary[item[0]] = dictionary[item[0]] + item[1];
    }

    for (int index = 0; index < items2.size(); index++){
      vector<int> item = items2[index];
      dictionary[item[0]] = dictionary[item[0]] + item[1];
    }

    vector<vector<int>> ret;

    for (auto item : dictionary){
      ret.push_back({item.first, item.second});
    }
    
    return ret;
  }
};