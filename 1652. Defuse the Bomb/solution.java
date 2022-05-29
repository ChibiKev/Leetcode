class Solution {
  public int[] decrypt(int[] code, int k) {
    int[] result = new int[code.length];
    if (k == 0){
      Arrays.fill(result, 0);
      return result;
    }
    int start = 1;
    int end = k + 1;
    if (k < 0){
      start = code.length + k;
      end = code.length;
    }

    int total = 0;
    for (int index = start; index < end; index++){
      total += code[index];
    }

    for (int index = 0; index < code.length; index++){
      result[index] = total;
      start = start % code.length;
      end = end % code.length;
      total += code[end];
      total -= code[start];
      start += 1;
      end += 1;
    }

    return result;
  }
}