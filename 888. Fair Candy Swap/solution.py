class Solution(object):
  def fairCandySwap(self, aliceSizes, bobSizes):
    """
    :type aliceSizes: List[int]
    :type bobSizes: List[int]
    :rtype: List[int]
    """
    aliceTotal = 0
    bobTotal = 0
    for alice in aliceSizes:
      aliceTotal += alice
    for bob in bobSizes:
      bobTotal += bob
    
    difference = (aliceTotal - bobTotal) / 2
    aliceSet = set(aliceSizes)
    for bob in bobSizes:
      find = bob + difference
      if find in aliceSet:
        return [find, bob]