class Solution(object):
  def lastStoneWeight(self, stones):
    """
    :type stones: List[int]
    :rtype: int
    """
    result = []
    for stone in stones:
      result.append(-stone)
    heapq.heapify(result)
    while len(result) > 1 and result[0] != 0:
        heapq.heappush(result, heapq.heappop(result) - heapq.heappop(result))
    return -result[0]