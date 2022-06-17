class MyHashSet(object):

  def __init__(self):
    self.size = 1000000
    self.mySet = [[]] * self.size

  def add(self, key):
    """
    :type key: int
    :rtype: None
    """
    index = key % self.size
    if not self.contains(key):
      self.mySet[index].append(key)


  def remove(self, key):
    """
    :type key: int
    :rtype: None
    """
    index = key % self.size
    if self.contains(key):
      self.mySet[index].remove(key)

  def contains(self, key):
    """
    :type key: int
    :rtype: bool
    """
    index = key % self.size
    if key in self.mySet[index]:
      return True
    return False


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)