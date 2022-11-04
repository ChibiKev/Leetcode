class Solution {
public:
  bool haveConflict(vector<string>& event1, vector<string>& event2) {
    int event1Start = (stoi(event1[0].substr(0,2)) * 60) + stoi(event1[0].substr(3,5));
    int event1End = (stoi(event1[1].substr(0,2)) * 60) + stoi(event1[1].substr(3,5));
    int event2Start = (stoi(event2[0].substr(0,2)) * 60) + stoi(event2[0].substr(3,5));
    int event2End = (stoi(event2[1].substr(0,2)) * 60) + stoi(event2[1].substr(3,5));

    if (event1Start <= event2Start && event2Start <= event1End){
      return true;
    }
    else if (event1Start <= event2End && event2End <= event1End){
      return true;
    }
    else if (event2Start <= event1Start && event1Start <= event2End){
      return true;
    }
    else if (event2Start <= event1End && event1End <= event2End){
      return true;
    }
    
    return false;
  }
};