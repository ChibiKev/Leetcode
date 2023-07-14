class Solution {
  public int[] circularGameLosers(int n, int k) {
    boolean[] visited = new boolean[n];
    Arrays.fill(visited, false);

    int i = 0;
    int visit = 0;
    while (visited[i % n] == false){
      visit += 1;
      visited[i % n] = true;
      i += visit * k;
    }
    
    int[] result = new int[n - visit];
    int count = 0;
    for (int index = 0; index < visited.length; index++){
      boolean value = visited[index];
      if (value == false){
        result[count] = index + 1;
        count += 1;
      }
    }
    
    return result;
  }
}