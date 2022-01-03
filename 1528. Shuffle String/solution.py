class Solution(object):
  def restoreString(self, s, indices):
    """
    :type s: str
    :type indices: List[int]
    :rtype: str
    """
    
    storage = [''] * len(s)
    for index, letter in enumerate(s):
      storage[indices[index]] = letter
    
    result = ''.join(storage)
    
    return result