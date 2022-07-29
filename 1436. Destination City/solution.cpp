class Solution {
public:
  string destCity(vector<vector<string>>& paths) {
    unordered_set<string> pathsSet;
    for (int index = 0; index < paths.size(); index++){
      vector<string> path = paths[index];
      pathsSet.insert(path[0]);
    }

    for (int index = 0; index < paths.size(); index++){
      vector<string> path = paths[index];
      if (pathsSet.count(path[1]) == 0){
        return path[1];
      }
    }
    return "";
  }
};