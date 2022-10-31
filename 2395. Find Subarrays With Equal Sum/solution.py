class Solution(object):
  def findSubarrays(self, nums):
    """
    :type nums: List[int]
    :rtype: bool
    """
    if len(nums) < 2:
      return False

    mySet = set()
    for index, num in enumerate(nums[:-1]):
      nextNum = nums[index + 1]
      total = num + nextNum
      if total in mySet:
        return True
      else:
        mySet.add(total)

    return False