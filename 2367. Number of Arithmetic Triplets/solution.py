class Solution(object):
  def arithmeticTriplets(self, nums, diff):
    """
    :type nums: List[int]
    :type diff: int
    :rtype: int
    """
    mySet = set(nums)
    count = 0
    for num in mySet:
      if (num + diff) in mySet and (num + diff + diff) in mySet:
        count += 1

    return count