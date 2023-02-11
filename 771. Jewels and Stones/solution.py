class Solution(object):
  def numJewelsInStones(self, jewels, stones):
    """
    :type jewels: str
    :type stones: str
    :rtype: int
    """
    mySet = set()
    for jewel in jewels:
      mySet.add(jewel)

    count = 0
    for stone in stones:
      if stone in mySet:
        count += 1

    return count