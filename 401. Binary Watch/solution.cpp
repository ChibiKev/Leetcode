class Solution {
public:
  vector<string> readBinaryWatch(int turnedOn) {
    vector<string> result;
    for (int hour = 0; hour < 12; hour++){
      for (int minute = 0; minute < 60; minute++){
        if (__builtin_popcount(hour) + __builtin_popcount(minute) == turnedOn){
          string formattedMinute = "0" + to_string(minute);
          string formattedTime = to_string(hour) + ":" + formattedMinute.substr(formattedMinute.length() - 2);
          result.push_back(formattedTime);
        }
      }
    }
    return result;
  }
};