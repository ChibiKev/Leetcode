class Solution {
  public String removeOuterParentheses(String s) {
    Stack<Character> stack = new Stack<Character>();
    String result = "";
    for (int index = 0; index < s.length(); index++){
      Character character = s.charAt(index);
      if (stack.size() == 0){
        stack.push(character);
      }
      else{
        if (character == '('){
          stack.push('(');
          result += "(";
        }
        else{
          stack.pop();
          if (stack.size() != 0){
            result += ")";
          }
        }
      }
    }
    return result;
  }
}