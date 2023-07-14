class Solution {
public:
  vector<int> circularGameLosers(int n, int k) {
    vector<bool> visited(n, false);

    int i = 0;
    int visit = 0;
    while (visited[i % n] == false){
      visit += 1;
      visited[i % n] = true;
      i += visit * k;
    }
    
    vector<int> result;
    for (int index = 0; index < visited.size(); index++){
      bool value = visited[index];
      if (value == false){
        result.push_back(index + 1);
      }
    }
    
    return result;
  }
};