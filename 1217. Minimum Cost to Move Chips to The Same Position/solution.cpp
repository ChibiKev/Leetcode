class Solution {
public:
  int minCostToMoveChips(vector<int>& position) {
    int even = 0;
    int odd = 0;
    for (int index = 0; index < position.size(); index++){
      int chips = position[index];
      if (chips % 2 == 0){
        even += 1;
      }
      else{
        odd += 1;
      }
    }

    int result = even;
    if (even > odd){
      result = odd;
    }

    return result;
  }
};