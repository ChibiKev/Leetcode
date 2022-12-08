class Solution(object):
  def maximum69Number (self, num):
    """
    :type num: int
    :rtype: int
    """
    numString = str(num)
    for index, value in enumerate(numString):
      if value == '6':
        return int(numString[:index] + '9' + numString[index + 1:])

    return num