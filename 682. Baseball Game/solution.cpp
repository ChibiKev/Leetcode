class Solution {
public:
  int calPoints(vector<string>& ops) {
    vector<int> record;
    for (int index = 0; index < ops.size(); index++){
      string op = ops[index];
      if (op == "+"){
        record.push_back(record[record.size() - 1] + record[record.size() - 2]);
      }
      else if (op == "D"){
        record.push_back(record[record.size() - 1] * 2);
      }
      else if (op == "C"){
        record.pop_back();
      }
      else{
        record.push_back(stoi(op));
      }
    }

    int total = 0;
    for (int index = 0; index < record.size(); index++){
      int num = record[index];
      total += num;
    }

    return total;
  }
};