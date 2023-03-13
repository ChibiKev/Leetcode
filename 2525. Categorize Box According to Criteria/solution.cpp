class Solution {
public:
  string categorizeBox(int length, int width, int height, int mass) {
    bool bulky = (length >= 10000) || (width >= 10000) || (height >= 10000) || (mass >= 10000) || (((long long) length * (long long) width * (long long) height) >= 1000000000);
    bool heavy = mass >= 100;
    
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
    
    return NULL;
  }
};