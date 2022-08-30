class Solution(object):
  def removeDigit(self, number, digit):
    """
    :type number: str
    :type digit: str
    :rtype: str
    """
    result = "0"
    for index, value in enumerate(number):
      if value == digit:
        temp = number[0:index] + number[index + 1:]
        if temp > result:
          result = temp
    return result