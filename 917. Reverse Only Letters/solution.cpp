class Solution {
public:
  string reverseOnlyLetters(string s) {
    vector<char> myList;
    for (int index = 0; index < s.size(); index++){
      myList.push_back(s[index]);
    }
    int start = 0;
    int end = s.size() - 1;

    while (start < end){
      if  (!isalpha(myList[start])){
        start += 1;
      }
      else if (!isalpha(myList[end])){
        end -= 1;      
      }
      else{
        char temp = myList[start];
        myList[start] = myList[end];
        myList[end] = temp;
        start += 1;
        end -= 1;
      }
    }
    
    string result;
    for (int index = 0; index < myList.size(); index++){
      result += myList[index];
    }
    return result;
  }
};