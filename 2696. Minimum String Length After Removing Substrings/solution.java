class Solution {
  public int minLength(String s) {
    Stack<Character> stack = new Stack<Character>();
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (letter == 'B' && stack.size() > 0 && stack.peek() == 'A'){
        stack.pop();
      }
      else if (letter == 'D' && stack.size() > 0 && stack.peek() == 'C'){
        stack.pop();
      }
      else{
        stack.push(letter);
      }
    }
    return stack.size();
  }
}