class Solution {
public:
  double average(vector<int>& salary) {
    int minimum = salary[0];
    int maximum = salary[0];
    double total = 0.00;
    for (int index = 0; index < salary.size(); index++){
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
    return total / (salary.size() - 2);
  }
};