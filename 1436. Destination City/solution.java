class Solution {
  public String destCity(List<List<String>> paths) {
    Set<String> pathsSet = new HashSet<>();
    for (int index = 0; index < paths.size(); index++){
      List<String> path = paths.get(index);
      pathsSet.add(path.get(0));
    }

    for (int index = 0; index < paths.size(); index++){
      List<String> path = paths.get(index);
      if (!pathsSet.contains(path.get(1))){
        return path.get(1);
      }
    }
    return "";
  }
}