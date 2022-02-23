class Solution {
  public boolean isOneBitCharacter(int[] bits) {
    int index = 0;
    int bitsSize = bits.length - 1;
    while (index < bitsSize){
      if (bits[index] == 1){
        index += 2;
      }
      else{
        index += 1;
      }
    }

    return index == bitsSize;
  }
}