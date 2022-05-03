class Solution(object):
  def uniqueOccurrences(self, arr):
    """
    :type arr: List[int]
    :rtype: bool
    """
    dictionary = {}
    for num in arr:
      if num not in dictionary:
        dictionary[num] = 1
      else:
        dictionary[num] += 1
    
    mySet = set()
    for num in dictionary:
      mySet.add(dictionary[num])
      
    return len(mySet) == len(dictionary)