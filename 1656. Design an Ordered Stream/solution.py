class OrderedStream(object):

  def __init__(self, n):
    """
    :type n: int
    """
    self.list = [None] * n
    self.pointer = 0


  def insert(self, idKey, value):
    """
    :type idKey: int
    :type value: str
    :rtype: List[str]
    """
    key = idKey - 1
    self.list[key] = value
    if key > self.pointer:
      return []
    
    while self.pointer < len(self.list) and self.list[self.pointer]:
      self.pointer += 1
    return self.list[key:self.pointer]


# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream(n)
# param_1 = obj.insert(idKey,value)