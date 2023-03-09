class Solution {
public:
  long long pickGifts(vector<int>& gifts, int k) {
    int count = 0;
    while (count < k){
      sort(gifts.begin(), gifts.end());
      int squaredGift = sqrt(gifts[gifts.size() - 1]);
      gifts[gifts.size() - 1] = squaredGift;
      count += 1;
    }
    
    long total = 0;
    for (int index = 0; index < gifts.size(); index++){
      int gift = gifts[index];
      total += gift;
    }
    return total;
  }
};