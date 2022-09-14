class Solution {
  public String makeGood(String s) {
    Stack<Character> myStack = new Stack<Character>();
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (myStack.size() == 0){
        myStack.push(letter);      
      }
      else if (Character.isUpperCase(myStack.get(myStack.size() - 1)) && Character.toLowerCase(myStack.get(myStack.size() - 1)) == letter){
        myStack.pop();      
      }
      else if (Character.isLowerCase(myStack.get(myStack.size() - 1)) && Character.toUpperCase(myStack.get(myStack.size() - 1)) == letter){
        myStack.pop();
      }
      else{
        myStack.push(letter);
      }
    }

    String result = "";
    for (int index = 0; index < myStack.size(); index++){
      result += myStack.get(index);
    }
    return result;
  }
}