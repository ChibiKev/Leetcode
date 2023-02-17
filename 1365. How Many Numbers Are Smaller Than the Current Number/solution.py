class Solution(object):
  def smallerNumbersThanCurrent(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    dictionary = {}
    sortedNums = sorted(nums)
    for index in range(len(sortedNums) - 1, -1, -1):
      num = sortedNums[index]
      dictionary[num] = index
    
    result = nums
    for index, num in enumerate(result):
      result[index] = dictionary[num]

    return result