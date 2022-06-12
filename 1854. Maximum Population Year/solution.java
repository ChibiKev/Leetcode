class Solution {
  public int maximumPopulation(int[][] logs) {
    int[] years = new int[101];
    Arrays.fill(years, 0);
    for (int index = 0; index < logs.length; index++){
      int birth = logs[index][0];
      int death = logs[index][1];
      years[birth - 1950] += 1;
      years[death - 1950] -= 1;
    }

    int count = 0;
    int maxCount = 0;
    int maxYear = 0;
    for (int index = 0; index < years.length; index++){
      int year = years[index];
      count += year;
      if (count > maxCount){
        maxCount = count;
        maxYear = index;
      }
    }

    return 1950 + maxYear;
  }
}