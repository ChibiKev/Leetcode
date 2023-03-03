class Solution {
  public int closetTarget(String[] words, String target, int startIndex) {
    int shortestDistance = -1;
    for (int index = 0; index < words.length; index++){
      String word = words[index];
      if (word.equals(target)){
        int distance = Math.abs(index - startIndex);
        int distance2 = words.length - Math.abs(index - startIndex);
        if (shortestDistance > distance || shortestDistance == -1){
          shortestDistance = distance;
        }
        if (shortestDistance > distance2){
          shortestDistance = distance2;
        }
      }
    }

    return shortestDistance;
  }
}