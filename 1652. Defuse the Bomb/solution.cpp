class Solution {
public:
  vector<int> decrypt(vector<int>& code, int k) {
    if (k == 0){
      vector<int> result(code.size(), 0);
      return result;
    }
    int start = 1;
    int end = k + 1;
    if (k < 0){
      start = code.size() + k;
      end = code.size();
    }

    int total = 0;
    for (int index = start; index < end; index++){
      total += code[index];
    }

    vector<int> result;
    for (int index = 0; index < code.size(); index++){
      result.push_back(total);
      start = start % code.size();
      end = end % code.size();
      total += code[end];
      total -= code[start];
      start += 1;
      end += 1;
    }

    return result;
  }
};