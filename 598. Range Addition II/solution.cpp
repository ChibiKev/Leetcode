class Solution {
public:
  int maxCount(int m, int n, vector<vector<int>>& ops) {
    if (ops.size() == 0){
      return m * n;
    }

    vector<int> x;
    vector<int> y;

    for (int index = 0; index < ops.size(); index++){
      x.push_back(ops[index][0]);
      y.push_back(ops[index][1]);
    }

    int smallestX = x[0];
    int smallestY = y[0];
    for (int index = 0; index < x.size(); index++){
      int value = x[index];
      if (value < smallestX){
        smallestX = value;
      }
    }

    for (int index = 0; index < y.size(); index++){
      int value = y[index];
      if (value < smallestY){
        smallestY = value;
      }
    }

    return smallestX * smallestY;
  }
};