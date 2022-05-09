class Solution {
public:
  double largestTriangleArea(vector<vector<int>>& points) {
    double result = 0;
    for (int x = 0; x < points.size(); x++){
      vector<int> i = points[x];
      for (int y = 0; y < points.size(); y++){
        vector<int> j = points[y];
        for (int z = 0; z < points.size(); z++){
          vector<int> k = points[z];
          double area = 0.5 * abs(i[0] * j[1] + j[0] * k[1] + k[0] * i[1]- j[0] * i[1] - k[0] * j[1] - i[0] * k[1]);
          if (area > result){
            result = area;
          }
        }
      }
    }
    return result;
  }
};