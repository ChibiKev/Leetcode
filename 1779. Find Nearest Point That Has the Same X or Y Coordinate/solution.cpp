class Solution {
public:
  int nearestValidPoint(int x, int y, vector<vector<int>>& points) {
    int minDistance = INT_MAX;
    int result = -1;
    for (int index = 0; index < points.size(); index++){
      vector<int> point = points[index];
      int currentx = point[0];
      int currenty = point[1];
      if (currentx == x || currenty == y){
        int distance = abs(currentx - x) + abs(currenty - y);
        if (distance < minDistance){
          minDistance = distance;
          result = index;
        }
      }
    }
    return result;
  }
};