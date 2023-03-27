class MyQueue(object):

  def __init__(self):
    self.storagePush = []
    self.storagePop = []

  def push(self, x):
    """
    :type x: int
    :rtype: None
    """
    self.storagePush.append(x)

  def pop(self):
    """
    :rtype: int
    """
    self.peek()
    value = self.storagePop[-1]
    self.storagePop.pop()
    return value

  def peek(self):
    """
    :rtype: int
    """
    if len(self.storagePop) == 0:
      while self.storagePush:
        value = self.storagePush[-1]
        self.storagePop.append(value)
        self.storagePush.pop()
    return self.storagePop[-1]

  def empty(self):
    """
    :rtype: bool
    """
    return len(self.storagePush) + len(self.storagePop) == 0

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()