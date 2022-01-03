class Solution {
  public String restoreString(String s, int[] indices) {
    int size = s.length();
    char[] storage = new char[size];
    for (int i = 0; i < size; i++){
      storage[indices[i]] = s.charAt(i);
    }
    
    String result = new String(storage);
    
    return result;
  }
}