class Solution {
  public int minOperations(String[] logs) {
    int count = 0; 
    for (int i = 0; i < logs.length; i++){
      if (logs[i].equals("../")){
        if (count > 0){
          count -= 1;
        }
      }
      else if (logs[i].equals("./")){
        continue;
      }
      else{
        count += 1;
      }
    }

    return count;
  }
}