class Solution {
public:
  string makeGood(string s) {
    vector<char> myStack;
    for (int index = 0; index < s.size(); index++){
      char letter = s[index];
      if (myStack.size() == 0){
        myStack.push_back(letter);      
      }
      else if (isupper(myStack[myStack.size() - 1]) && tolower(myStack[myStack.size() - 1]) == letter){
        myStack.pop_back();      
      }
      else if (islower(myStack[myStack.size() - 1]) && toupper(myStack[myStack.size() - 1]) == letter){
        myStack.pop_back();
      }
      else{
        myStack.push_back(letter);
      }
    }

    string result;
    for (int index = 0; index < myStack.size(); index++){
      result += myStack[index];
    }
    return result;
  }
};