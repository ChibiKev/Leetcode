class RecentCounter(object):

  def __init__(self):
    self.myQueue = deque()

  def ping(self, t):
    """
    :type t: int
    :rtype: int
    """
    self.myQueue.append(t)
    while self.myQueue[0] < self.myQueue[-1] - 3000:
      self.myQueue.popleft()
    return len(self.myQueue)

# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)