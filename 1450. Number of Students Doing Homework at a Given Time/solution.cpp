class Solution {
public:
  int busyStudent(vector<int>& startTime, vector<int>& endTime, int queryTime) {
    int totalLength = startTime.size();
    int count = 0;
    for(int i = 0; i < totalLength; i++){
      int start = startTime[i];
      int end = endTime[i];
      if (start <= queryTime && queryTime <= end){
        count += 1;
      }
    }

    return count;
  }
};