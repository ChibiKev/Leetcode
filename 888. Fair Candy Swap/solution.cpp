class Solution {
public:
  vector<int> fairCandySwap(vector<int>& aliceSizes, vector<int>& bobSizes) {
    int aliceTotal = 0;
    int bobTotal = 0;
    for (int index = 0; index < aliceSizes.size(); index++){
      int alice = aliceSizes[index];
      aliceTotal += alice;
    }
    for (int index = 0; index < bobSizes.size(); index++){
      int bob = bobSizes[index];
      bobTotal += bob;
    }

    int difference = (aliceTotal - bobTotal) / 2;
    unordered_set<int> aliceSet = unordered_set<int>(aliceSizes.begin(),aliceSizes.end());
    for (int index = 0; index < bobSizes.size(); index++){
      int bob = bobSizes[index];
      int search = bob + difference;
      if (aliceSet.count(search) != 0){
        return {search, bob};
      }
    }
    return {};
  }
};