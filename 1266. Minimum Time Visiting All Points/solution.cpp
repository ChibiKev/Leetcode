class Solution {
public:
  int minTimeToVisitAllPoints(vector<vector<int>>& points) {
    int distance = 0;
    for (int index = 1; index < points.size(); index++){
      int most = abs(points[index][0] - points[index - 1][0]);
      if (abs(points[index][1] - points[index - 1][1]) > most){
        most = abs(points[index][1] - points[index - 1][1]);
      }
      distance += most;
    }
    return distance;
  }
};