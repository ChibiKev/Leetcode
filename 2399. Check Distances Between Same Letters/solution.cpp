class Solution {
public:
  bool checkDistances(string s, vector<int>& distance) {
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      int letterIndex = (int) letter - 97;
      int distanceValue = distance[letterIndex];
      int nextValue = index + distanceValue + 1;
      if (s.size() <= nextValue){
        return false;
      }
      if (letter == s[nextValue]){
        distance[letterIndex] = -1;
      }
      else if (distance[letterIndex] != -1){
        return false;
      }
    }
    return true;
  }
};