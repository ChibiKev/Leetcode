class Solution {
public:
  int timeRequiredToBuy(vector<int>& tickets, int k) {
    int total = 0;
    int amount = tickets[k];

    for (int index = 0; index < tickets.size(); index++){
      int ticket = tickets[index];
      if (index <= k){
        if (amount < ticket){
          total += amount;
        }
        else{
          total += ticket;
        }
      }
      else if (index > k){
        if (amount - 1 < ticket){
          total += amount - 1;
        }
        else{
          total += ticket;
        }
      }
    }

    return total;
  }
};