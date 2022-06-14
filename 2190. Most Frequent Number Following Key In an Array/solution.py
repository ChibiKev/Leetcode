class Solution(object):
  def mostFrequent(self, nums, key):
    """
    :type nums: List[int]
    :type key: int
    :rtype: int
    """
    dictionary = {}
    count = 0
    result = nums[0]
    for index, num in enumerate(nums[:-1]):
      if num == key:
        nextNum = nums[index + 1]
        if not nextNum in dictionary:
          dictionary[nextNum] = 1
        else:
          dictionary[nextNum] += 1
        if dictionary[nextNum] > count:
          count = dictionary[nextNum]
          result = nextNum
    
    return result