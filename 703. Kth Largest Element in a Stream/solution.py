class KthLargest(object):

  def __init__(self, k, nums):
    """
    :type k: int
    :type nums: List[int]
    """
    self.largestAmount = k
    self.priorityQueue = []
    heapify(self.priorityQueue)
    for num in nums:
      heappush(self.priorityQueue, num)
      if len(self.priorityQueue) > k:
        heappop(self.priorityQueue)

  def add(self, val):
    """
    :type val: int
    :rtype: int
    """
    heappush(self.priorityQueue, val)
    if len(self.priorityQueue) > self.largestAmount:
      heappop(self.priorityQueue)
    return self.priorityQueue[0]

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)