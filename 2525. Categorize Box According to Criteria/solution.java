class Solution {
  public String categorizeBox(int length, int width, int height, int mass) {
    Boolean bulky = (length >= 10000) || (width >= 10000) || (height >= 10000) || (mass >= 10000) || (((long) length * (long) width * (long) height) >= 1000000000);
    Boolean heavy = mass >= 100;
    
    if (bulky && heavy){
      return "Both";
    }
    else if (!bulky && !heavy){
      return "Neither";
    }
    else if (bulky && !heavy){
      return "Bulky";
    }
    else if (!bulky && heavy){
      return "Heavy";
    }
    
    return null;
  }
}