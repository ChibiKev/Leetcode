class Solution {
public:
  vector<string> sortPeople(vector<string>& names, vector<int>& heights) {
    unordered_map<int, string> dictionary;
    for (int index = 0; index < names.size(); index++){
      string name = names[index];
      int height = heights[index];
      dictionary[height] = name;
    }

    sort(heights.begin(), heights.end());

    vector<string> result;
    for (int index = heights.size() - 1; index > -1; index--){
      int height = heights[index];
      result.push_back(dictionary[height]);
    }

    return result;
  }
};