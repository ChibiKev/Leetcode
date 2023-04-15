class Solution {
  public int[] evenOddBit(int n) {
    int even = 0;
    int odd = 0;
    for (int index = 0; index < 32; index++){
      if ((n & (1 << index)) != 0){
        if (index % 2 == 0){
          even += 1;
        }
        else{
          odd += 1;
        }
      }
    }
    return new int[] {even, odd};
  }
}