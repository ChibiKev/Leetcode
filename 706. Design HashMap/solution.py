class MyHashMap(object):

  def __init__(self):
    self.size = 1000000
    self.dictionary = [[]] * self.size

  def put(self, key, value):
    """
    :type key: int
    :type value: int
    :rtype: None
    """
    dictionary = self.dictionary[key % self.size]
    dictionaryIndex = -1
    for index, num in enumerate(dictionary):
      if num[0] == key:
        dictionaryIndex = index
        break
        
    if dictionaryIndex != -1:
      dictionary[index][1] = value
    else:
      dictionary.append([key, value])

  def get(self, key):
    """
    :type key: int
    :rtype: int
    """
    dictionary = self.dictionary[key % self.size]
    dictionaryIndex = -1
    for index, num in enumerate(dictionary):
      if num[0] == key:
        dictionaryIndex = index
        break
    
    if dictionaryIndex == -1:
      return -1
    return dictionary[dictionaryIndex][1]
    
  def remove(self, key):
    """
    :type key: int
    :rtype: None
    """
    dictionary = self.dictionary[key % self.size]
    dictionaryIndex = -1
    for index, num in enumerate(dictionary):
      if num[0] == key:
        dictionaryIndex = index
        break
        
    if dictionaryIndex == -1:
      return
    del dictionary[dictionaryIndex]


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)