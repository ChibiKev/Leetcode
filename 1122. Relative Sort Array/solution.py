class Solution(object):
  def relativeSortArray(self, arr1, arr2):
    """
    :type arr1: List[int]
    :type arr2: List[int]
    :rtype: List[int]
    """
    dictionary = {}
    others = []
    mySet = set(arr2)
    for num in arr1:
      if num not in dictionary and num in mySet:
        dictionary[num] = 1
      elif num in dictionary and num in mySet:
        dictionary[num] += 1
      else:
        others.append(num)
      
    others.sort()
    result = []
    for num in arr2:
      if num in dictionary:
        result.extend([num] * dictionary[num])
    result.extend(others)
    
    return result