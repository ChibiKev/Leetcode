class Solution {
public:
  vector<int> mostVisited(int n, vector<int>& rounds) {
    vector<int> result;
    if (rounds[0] == rounds[rounds.size() - 1]){
      return {rounds[0]};
    }
    else if (rounds[0] < rounds[rounds.size() - 1]){
      for (int number = rounds[0]; number < rounds[rounds.size() - 1] + 1; number++){
        result.push_back(number);
      }
    }
    else{
      for (int number = 1; number < rounds[rounds.size() - 1] + 1; number++){
        result.push_back(number);
      }
      for (int number = rounds[0]; number < n + 1; number++){
        result.push_back(number);
      }
    }
    return result;
  }
};