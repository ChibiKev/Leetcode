class Solution(object):
  def countEven(self, num):
    """
    :type num: int
    :rtype: int
    """
    total = (num % 10) + ((num / 10) % 10) + ((num / 100) % 10) + ((num / 1000) % 10)

    return (num - (total & 1)) / 2