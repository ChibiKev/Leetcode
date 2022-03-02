class Solution {
  public int minMovesToSeat(int[] seats, int[] students) {
    int[] sortedSeats = seats.clone();
    Arrays.sort(sortedSeats);
    int[] sortedStudents = students.clone();
    Arrays.sort(sortedStudents);

    int result = 0;

    for (int index = 0; index < seats.length; index++){
      int movements = Math.abs(sortedSeats[index] - sortedStudents[index]);
      result += movements;
    }

    return result;
  }
}