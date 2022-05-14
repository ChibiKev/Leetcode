class Solution(object):
  def minSubsequence(self, nums):
    """
    :type nums: List[int]
    :rtype: List[int]
    """
    nums.sort(reverse=True)
    total = 0
    for num in nums:
      total += num

    result = []
    resultTotal = 0
    for num in nums:
      result.append(num)
      resultTotal += num
      total -= num
      if resultTotal > total:
        break

    return result