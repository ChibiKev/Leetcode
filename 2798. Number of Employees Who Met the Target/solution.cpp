class Solution {
public:
  int numberOfEmployeesWhoMetTarget(vector<int>& hours, int target) {
    int count = 0;
    for (int index = 0; index < hours.size(); index++){
      int hour = hours[index];
      if (hour >= target){
        count += 1;
      }
    }
    return count;
  }
};