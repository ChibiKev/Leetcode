class Solution {
  public int maxCount(int m, int n, int[][] ops) {
    if (ops.length == 0){
      return m * n;
    }

    List<Integer> x = new ArrayList<Integer>();
    List<Integer> y = new ArrayList<Integer>();

    for (int index = 0; index < ops.length; index++){
      x.add(ops[index][0]);
      y.add(ops[index][1]);
    }

    int smallestX = x.get(0);
    int smallestY = y.get(0);
    for (int index = 0; index < x.size(); index++){
      int value = x.get(index);
      if (value < smallestX){
        smallestX = value;
      }
    }

    for (int index = 0; index < y.size(); index++){
      int value = y.get(index);
      if (value < smallestY){
        smallestY = value;
      }
    }

    return smallestX * smallestY;
  }
}