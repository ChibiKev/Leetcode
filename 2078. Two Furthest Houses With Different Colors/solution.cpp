class Solution {
public:
  int maxDistance(vector<int>& colors) {
    int furthestFromStart = colors.size() - 1;
    int furthestFromEnd = 0;
    while (colors[furthestFromStart] == colors[0]){
      furthestFromStart -= 1;
    }
    while (colors[furthestFromEnd] == colors[colors.size() - 1]){
      furthestFromEnd += 1;
    }       
    
    int max = colors.size() - 1 - furthestFromEnd;
    if (max < furthestFromStart){
      max = furthestFromStart;
    }
    
    return max;
  }
};