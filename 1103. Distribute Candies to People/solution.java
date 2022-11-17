class Solution {
  public int[] distributeCandies(int candies, int num_people) {
    int[] people = new int[num_people];
    Arrays.fill(people, 0);
    int amount = 1;
    int current = 0;
    while(true){
      if (current == num_people){
        current = 0;
      }
      if (amount > candies){
        people[current] += candies;
        break;
      }
      else{
        people[current] += amount;
        candies -= amount;
        current += 1;
        amount += 1;
      }
    }
    return people;
  }
}