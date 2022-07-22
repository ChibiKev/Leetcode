class Solution {
  public String reverseOnlyLetters(String s) {
    List<Character> myList = new ArrayList<Character>();
    for (int index = 0; index < s.length(); index++){
      myList.add(s.charAt(index));
    }
    int start = 0;
    int end = s.length() - 1;

    while (start < end){
      if  (!Character.isLetter(myList.get(start))){
        start += 1;
      }
      else if (!Character.isLetter(myList.get(end))){
        end -= 1;      
      }
      else{
        char temp = myList.get(start);
        myList.set(start, myList.get(end));
        myList.set(end, temp);
        start += 1;
        end -= 1;
      }
    }
    
    String result = "";
    for (int index = 0; index < myList.size(); index++){
      result += myList.get(index);
    }
    return result;
  }
}