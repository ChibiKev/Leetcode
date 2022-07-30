class Solution {
public:
  vector<string> fizzBuzz(int n) {
    vector<string> answer;
    for (int index = 1; index < n + 1; index++){
      if (index % 3 == 0 && index % 5 == 0){
        answer.push_back("FizzBuzz");
      }
      else if (index % 3 == 0){
        answer.push_back("Fizz");
      }
      else if (index % 5 == 0){
        answer.push_back("Buzz");
      }
      else{
        answer.push_back(to_string(index));
      }
    }

    return answer;
  }
};