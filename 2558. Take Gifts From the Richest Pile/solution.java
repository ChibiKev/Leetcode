class Solution {
  public long pickGifts(int[] gifts, int k) {
    int count = 0;
    while (count < k){
      Arrays.sort(gifts);
      int squaredGift = (int) Math.sqrt(gifts[gifts.length - 1]);
      gifts[gifts.length - 1] = squaredGift;
      count += 1;
    }
    
    long total = 0;
    for (int index = 0; index < gifts.length; index++){
      int gift = gifts[index];
      total += gift;
    }
    return total;
  }
}