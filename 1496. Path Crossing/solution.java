class Solution {
  public boolean isPathCrossing(String path) {
    int x = 0;
    int y = 0;

    Set<String> mySet = new HashSet<String>();
    mySet.add("0, 0");

    for (int index = 0; index < path.length(); index++){
      Character letter = path.charAt(index);
      if (letter == 'N'){
        y += 1;
      }
      else if (letter == 'S'){
        y -= 1;      
      }
      else if (letter == 'E'){
        x += 1;
      }
      else if (letter == 'W'){
        x -= 1;
      }
      String current = x + ", " + y;
      if (!mySet.add(current)){
        return true;      
      }
    }

    return false;
  }
}