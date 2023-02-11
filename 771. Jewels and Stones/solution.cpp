class Solution {
public:
  int numJewelsInStones(string jewels, string stones) {
    unordered_set<char> mySet;
    for (int index = 0; index < jewels.size(); index++){
      char jewel = jewels[index];
      mySet.insert(jewel);
    }

    int count = 0;
    for (int index = 0; index < stones.size(); index++){
      char stone = stones[index];
      if (mySet.count(stone) == 1){
        count += 1;
      }
    }

    return count;
  }
};