class Solution {
  public List<String> fizzBuzz(int n) {
    List<String> answer = new ArrayList<String>();
    for (int index = 1; index < n + 1; index++){
      if (index % 3 == 0 && index % 5 == 0){
        answer.add("FizzBuzz");
      }
      else if (index % 3 == 0){
        answer.add("Fizz");
      }
      else if (index % 5 == 0){
        answer.add("Buzz");
      }
      else{
        answer.add(Integer.toString(index));
      }
    }

    return answer;
  }
}