class Solution {
public:
  int closetTarget(vector<string>& words, string target, int startIndex) {
    int shortestDistance = -1;
    for (int index = 0; index < words.size(); index++){
      string word = words[index];
      if (word == target){
        int distance = abs(index - startIndex);
        int distance2 = words.size() - abs(index - startIndex);
        if (shortestDistance > distance || shortestDistance == -1){
          shortestDistance = distance;
        }
        if (shortestDistance > distance2){
          shortestDistance = distance2;
        }
      }
    }

    return shortestDistance;
  }
};