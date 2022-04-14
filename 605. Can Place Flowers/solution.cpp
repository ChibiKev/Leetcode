class Solution {
public:
  bool canPlaceFlowers(vector<int>& flowerbed, int n) {
    int slots = 0;
    int count = 1;
    for (int index = 0; index < flowerbed.size(); index++){
      int flower = flowerbed[index];
      if (flower == 0){
        count += 1;
      }
      else{
        slots += (count - 1) / 2;
        count = 0;
      }
    }

    return (slots + (count / 2)) >= n;
  }
};