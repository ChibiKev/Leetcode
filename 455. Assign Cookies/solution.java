class Solution {
  public int findContentChildren(int[] g, int[] s) {
    Arrays.sort(g);
    Arrays.sort(s);
    int childrenIndex = 0;
    int count = 0;
    for (int i = 0; i < s.length; i++){
      int cookies = s[i];
      if (childrenIndex >= g.length){
        break;
      }
      if (g[childrenIndex] <= cookies){
        count += 1;
        childrenIndex += 1;
      }
    }

    return count;
  }
}