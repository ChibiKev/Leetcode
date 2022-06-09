class Solution {
  public int countStudents(int[] students, int[] sandwiches) {
    int[] count = {0, 0};
    for (int index = 0; index < students.length; index++){
      int student = students[index];
      count[student] += 1;
    }

    int index = 0;
    while (index < students.length && count[sandwiches[index]] != 0){
      count[sandwiches[index]] -= 1;
      index += 1;
    }

    return students.length - index;
  }
}