class Solution {
public:
  string bestHand(vector<int>& ranks, vector<char>& suits) {
    unordered_set<int> suitsSet = unordered_set<int>(suits.begin(),suits.end());
    if (suitsSet.size() == 1){
      return "Flush";
    }
    
    unordered_map<int, int> ranksDictionary;
    for (int index = 0; index < ranks.size(); index++){
      int rank = ranks[index];
      ranksDictionary[rank]++;
    }
    
    string result = "";

    for (auto rank : ranksDictionary){
      if (rank.second > 2){
        result = "Three of a Kind";
      }
      else if (rank.second > 1 && result == ""){
        result = "Pair";
      }
    }
    
    if (result == ""){
      result = "High Card";
    }

    return result;
  }
};