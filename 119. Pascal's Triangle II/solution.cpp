class Solution {
public:
  vector<int> getRow(int rowIndex) {
    vector<int> current {1};
    for (int iteration = 0; iteration < rowIndex; iteration++){
      vector<int> storage {1};
      for (int index = 0; index < current.size() - 1; index++){
        storage.push_back(current[index] + current[index + 1]);
      }
      storage.push_back(1);
      current = storage;
    }
    return current;
  }
};