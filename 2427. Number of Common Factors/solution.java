class Solution {
  public int commonFactors(int a, int b) {
    int count = 0;
    int lowest = a;
    if (lowest > b){
      lowest = b;
    }
    
    for (int index = 1; index < lowest + 1; index++){
      if ((a % index == 0) && (b % index == 0)){
        count += 1;
      }
    }
    
    return count;
  }
}