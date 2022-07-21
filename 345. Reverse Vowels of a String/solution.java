class Solution {
  public String reverseVowels(String s) {
    Set<Character> vowels = new HashSet<Character>(Arrays.asList('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'));
    List<Character> myList = new ArrayList<Character>();
    for (int index = 0; index < s.length(); index++){
      myList.add(s.charAt(index));
    }
    int start = 0;
    int end = myList.size() - 1;

    while (start < end){
      while (start < end && !vowels.contains(myList.get(start))){
        start += 1;
      }
      while (end > start && !vowels.contains(myList.get(end))){
        end -= 1;
      }
      Character temp = myList.get(start);
      myList.set(start, myList.get(end));
      myList.set(end, temp);
      start += 1;
      end -= 1;
    }

    String result = "";
    for (int index = 0; index < myList.size(); index++){
      result += myList.get(index);
    }
    return result;
  }
}