class Solution {
public:
  string licenseKeyFormatting(string s, int k) {
    string nonformatted = "";
    for (int index = 0; index < s.size(); index++){
      char value = s[index];
      if (value != '-'){
        nonformatted += toupper(value);
      }
    }

    int amount = nonformatted.size() % k;
    if (nonformatted.size() % k == 0){
      amount = k;
    }

    string result = nonformatted.substr(0, amount);

    while (amount < nonformatted.size()){
      result += '-' + nonformatted.substr(amount, k);
      amount += k;
    }

    return result;
  }
};