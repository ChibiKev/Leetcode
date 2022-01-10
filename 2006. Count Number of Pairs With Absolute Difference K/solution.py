class Solution(object):
  def countKDifference(self, nums, k):
    """
    :type nums: List[int]
    :type k: int
    :rtype: int
    """
    dictionary = {}
    count = 0
    for num in nums:
      if num not in dictionary:
        dictionary[num] = 1
      else:
        dictionary[num] += 1
        
    for num in nums:
      search = num + k
      if search in dictionary:
        count += dictionary[search]
      
    return count