class Solution {
public:
  vector<vector<int>> flipAndInvertImage(vector<vector<int>>& image) {
    vector<vector<int>> result;
    for (int row = 0; row < image.size(); row++){
      vector<int> reversedRow;
      for (int column = image[row].size() - 1; column > -1; column--){
        int number = 0;
        if (image[row][column] == 0){
          number = 1;
        }
        reversedRow.push_back(number);
      }
      result.push_back(reversedRow);
    }

    return result;
  }
};