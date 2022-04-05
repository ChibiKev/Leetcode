class NumArray(object):

  def __init__(self, nums):
    """
    :type nums: List[int]
    """
    self.dp = []
    numsSum = 0
    for num in nums:
      numsSum += num
      self.dp.append(numsSum)

  def sumRange(self, left, right):
    """
    :type left: int
    :type right: int
    :rtype: int
    """
    total = 0
    if left == 0:
      total = self.dp[right]
    else:
      total = self.dp[right] - self.dp[left - 1]
    return total
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)