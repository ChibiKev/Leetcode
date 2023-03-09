class Solution(object):
  def pickGifts(self, gifts, k):
    """
    :type gifts: List[int]
    :type k: int
    :rtype: int
    """
    count = 0
    while count < k:
      gifts = sorted(gifts)
      squaredGift = int(sqrt(gifts[len(gifts) - 1]))
      gifts[len(gifts) - 1] = squaredGift
      count += 1
    
    total = 0
    for gift in gifts:
      total += gift
    return total