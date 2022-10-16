class Solution {
public:
  int countDaysTogether(string arriveAlice, string leaveAlice, string arriveBob, string leaveBob) {
    vector<int> months {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    int arriveAliceDays = stoi(arriveAlice.substr(3,5));
    for (int month = 0; month < stoi(arriveAlice.substr(0,2)) - 1; month++){
      arriveAliceDays += months[month];
    }

    int leaveAliceDays = stoi(leaveAlice.substr(3,5));
    for (int month = 0; month < stoi(leaveAlice.substr(0,2)) - 1; month++){
      leaveAliceDays += months[month];
    }

    int arriveBobDays = stoi(arriveBob.substr(3,5));
    for (int month = 0; month < stoi(arriveBob.substr(0,2)) - 1; month++){
      arriveBobDays += months[month];
    }

    int leaveBobDays = stoi(leaveBob.substr(3,5));
    for (int month = 0; month < stoi(leaveBob.substr(0,2)) - 1; month++){
      leaveBobDays += months[month];
    }

    if (leaveAliceDays < arriveBobDays || leaveBobDays < arriveAliceDays){
      return 0;
    }
    
    int result = 1;
    if (leaveAliceDays > leaveBobDays){
      result += leaveBobDays;
    }
    else {
      result += leaveAliceDays;
    }

    if (arriveBobDays < arriveAliceDays){
      result -= arriveAliceDays;
    }
    else {
      result -= arriveBobDays;
    }

    return result;
  }
};