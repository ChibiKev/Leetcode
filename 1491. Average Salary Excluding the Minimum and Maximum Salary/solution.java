class Solution {
  public double average(int[] salary) {
    int minimum = salary[0];
    int maximum = salary[0];
    double total = 0.00;
    for (int index = 0; index < salary.length; index++){
      int employee = salary[index];
      total += employee;
      if (employee > maximum){
        maximum = employee;
      }
      if (employee < minimum){
        minimum = employee;
      }
    }

    total -= minimum + maximum;
    return total / (salary.length - 2);
  }
}