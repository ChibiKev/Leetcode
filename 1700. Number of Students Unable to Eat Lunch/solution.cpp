class Solution {
public:
  int countStudents(vector<int>& students, vector<int>& sandwiches) {
    vector<int> count {0, 0};
    for (int index = 0; index < students.size(); index++){
      int student = students[index];
      count[student] += 1;
    }

    int index = 0;
    while (index < students.size() && count[sandwiches[index]] != 0){
      count[sandwiches[index]] -= 1;
      index += 1;
    }

    return students.size() - index;
  }
};