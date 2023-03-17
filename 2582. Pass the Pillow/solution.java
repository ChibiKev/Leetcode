class Solution {
  public int passThePillow(int n, int time) {
    int totalTimeOnePass = n - 1;
    int totalPasses = time / totalTimeOnePass;
    int personIndex = time % totalTimeOnePass;
    if (totalPasses % 2 == 0){
      return personIndex + 1;
    }
    return n - personIndex;
  }
}