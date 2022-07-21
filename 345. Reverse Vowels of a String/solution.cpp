class Solution {
public:
  string reverseVowels(string s) {
    unordered_set<char> vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
    vector<char> myList;
    for (int index = 0; index < s.size(); index++){
      myList.push_back(s[index]);
    }
    int start = 0;
    int end = myList.size() - 1;

    while (start < end){
      while (start < end && vowels.count(myList[start]) != 1){
        start += 1;
      }
      while (end > start && vowels.count(myList[end]) != 1){
        end -= 1;
      }
      char temp = myList[start];
      myList[start] = myList[end];
      myList[end] = temp;
      start += 1;
      end -= 1;
    }

    string result;
    for (int index = 0; index < myList.size(); index++){
      result += myList[index];
    }
    return result;
  }
};