class Solution {
public:
  string reformatDate(string date) {
    unordered_map<string, string> month = {
      {"Jan", "01"},
      {"Feb", "02"},
      {"Mar", "03"},
      {"Apr", "04"},
      {"May", "05"},
      {"Jun", "06"},
      {"Jul", "07"},
      {"Aug", "08"},
      {"Sep", "09"},
      {"Oct", "10"},
      {"Nov", "11"},
      {"Dec", "12"}
    };

    if (date.size() == 13){
      return date.substr(date.size() - 4, date.size())  + "-" + month[date.substr(date.size() - 8, 3)] + "-" + date.substr(0, 2);
    }

    return date.substr(date.size() - 4, date.size()) + "-" + month[date.substr(date.size() - 8, 3)] + "-0" + date[0];
  }
};