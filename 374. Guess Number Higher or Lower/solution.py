# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num):

class Solution(object):
  def guessNumber(self, n):
    """
    :type n: int
    :rtype: int
    """
    low = 0
    high = n
    while low <= high:
      mid = low + (high - low) // 2
      guessResult = guess(mid)
      if guessResult == 0:
        return mid
      elif guessResult == 1:
        low = mid + 1
      elif guessResult == -1:
        high = mid - 1
    return -1