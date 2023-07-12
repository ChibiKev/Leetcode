class Solution(object):
  def distinctDifferenceArray(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    prefix = set()
    suffix = {}
    for num in nums:
      if num not in suffix:
        suffix[num] = 1
      else:
        suffix[num] += 1
    
    result = []

    for num in nums:
      prefix.add(num)
      
      suffix[num] -= 1
      if suffix[num] == 0:
        suffix.pop(num)
      
      result.append(len(prefix) - len(suffix))

    return result