class MyStack(object):

  def __init__(self):
    self.storage = collections.deque()

  def push(self, x):
    """
    :type x: int
    :rtype: None
    """
    self.storage.append(x)
    for index in range(len(self.storage) - 1):
      value = self.storage[0]
      self.storage.popleft()
      self.storage.append(value)

  def pop(self):
    """
    :rtype: int
    """
    value = self.storage[0]
    self.storage.popleft()
    return value

  def top(self):
    """
    :rtype: int
    """
    return self.storage[0]

  def empty(self):
    """
    :rtype: bool
    """
    return len(self.storage) == 0

# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()