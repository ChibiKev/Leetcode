class Solution(object):
  def findErrorNums(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    found = set()
    result = []
    
    for num in nums:
      if num in found:
        result.append(num)
      else:
        found.add(num)
    
    for number in range(1,len(nums) + 1):
      if number not in found:
        result.append(number)
        
    return result