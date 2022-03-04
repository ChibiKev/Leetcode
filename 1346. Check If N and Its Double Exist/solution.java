class Solution {
  public boolean checkIfExist(int[] arr) {
    Set<Integer> arrSet = new HashSet<>();
    for (int index = 0; index < arr.length; index++){
      arrSet.add(arr[index]);
    }
    
    int zero = 0;
    
    for (int index = 0; index < arr.length; index++){
      int num = arr[index];
      if (num == 0 && zero == 0){
        zero = 1;
        continue;
      }  
      if (arrSet.contains(num * 2)){
        return true;
      }
    }

    return false;
  }
}