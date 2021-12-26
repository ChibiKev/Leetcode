class Solution(object):
  def kthDistinct(self, arr, k):
    """
    :type arr: List[str]
    :type k: int
    :rtype: str
    """
    dictionary = {}
    
    for letters in arr:
      if not letters in dictionary:
        dictionary[letters] = 1
      else:
        dictionary[letters] += 1
            
    for letters in arr:
      if dictionary[letters] == 1:
        if k > 1:
          k -= 1
        elif k == 1:
          return letters
    return ""