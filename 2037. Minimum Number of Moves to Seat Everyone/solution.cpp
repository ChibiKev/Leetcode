class Solution {
public:
  int minMovesToSeat(vector<int>& seats, vector<int>& students) {
    vector<int> sortedSeats = seats;
    sort(sortedSeats.begin(), sortedSeats.end());
    vector<int> sortedStudents = students;
    sort(sortedStudents.begin(), sortedStudents.end());

    int result = 0;

    for (int index = 0; index < seats.size(); index++){
      int movements = abs(sortedSeats[index] - sortedStudents[index]);
      result += movements;
    }

    return result;
  }
};