class Solution(object):
  def minimumSum(self, num):
    """
    :type num: int
    :rtype: int
    """
    stringNum = str(num)
    sortedNum = sorted(stringNum)
    return int(sortedNum[0] + sortedNum[2]) + int(sortedNum[1] + sortedNum[3])