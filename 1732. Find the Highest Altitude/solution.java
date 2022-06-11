class Solution {
  public int largestAltitude(int[] gain) {
    int altitude = 0;
    int highest = 0;
    for (int index = 0; index < gain.length; index++){
      int value = gain[index];
      altitude += value;
      if (altitude > highest){
        highest = altitude;      
      }
    }

    return highest;
  }
}