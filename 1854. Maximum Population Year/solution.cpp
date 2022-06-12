class Solution {
public:
  int maximumPopulation(vector<vector<int>>& logs) {
    vector<int> years(101, 0);
    for (int index = 0; index < logs.size(); index++){
      vector<int> log = logs[index];
      int birth = log[0];
      int death = log[1];
      years[birth - 1950] += 1;
      years[death - 1950] -= 1;
    }

    int count = 0;
    int maxCount = 0;
    int maxYear = 0;
    for (int index = 0; index < years.size(); index++){
      int year = years[index];
      count += year;
      if (count > maxCount){
        maxCount = count;
        maxYear = index;
      }
    }

    return 1950 + maxYear;
  }
};