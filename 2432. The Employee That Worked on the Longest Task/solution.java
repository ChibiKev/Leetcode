class Solution {
  public int hardestWorker(int n, int[][] logs) {
    int employeeID = 0;
    int longestTask = 0;
    int start = 0;
    for (int index = 0; index < logs.length; index++){
      int[] log = logs[index];
      int task = log[1] - start;
      start = log[1];
      if (task > longestTask){
        longestTask = task;
        employeeID = log[0];
      }
      else if (task == longestTask){
        if (employeeID > log[0]){
          employeeID = log[0];
        }
      }
    }

    return employeeID;
  }
}