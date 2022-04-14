class Solution(object):
  def canPlaceFlowers(self, flowerbed, n):
    """
    :type flowerbed: List[int]
    :type n: int
    :rtype: bool
    """
    slots = 0
    count = 1
    for flower in flowerbed:
      if flower == 0: 
        count += 1
      else:
        slots += (count - 1) / 2
        count = 0
    return (slots + (count / 2)) >= n