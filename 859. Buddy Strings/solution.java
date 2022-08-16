class Solution {
  public boolean buddyStrings(String s, String goal) {
    if (s.length() != goal.length()){
      return false;    
    }
    
    Set<Character> sSet = new HashSet<>();
    for (int index = 0; index < s.length(); index++){
      sSet.add(s.charAt(index));
    }
    
    if (s.equals(goal) && sSet.size() < s.length()){
      return true;
    }

    List<Integer> difference = new ArrayList<Integer>();
    for (int index = 0; index < s.length(); index++){
      if (s.charAt(index) != goal.charAt(index)){
        difference.add(index);
      }
    }

    return difference.size() == 2 && s.charAt(difference.get(0)) == goal.charAt(difference.get(1)) && s.charAt(difference.get(1)) == goal.charAt(difference.get(0));
  }
}