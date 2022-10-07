class Solution(object):
  def largestGoodInteger(self, num):
    """
    :type num: str
    :rtype: str
    """
    result = ""
    for index in range(2, len(num)):
      if num[index - 2] == num[index - 1] and num[index - 1] == num[index]:
        if result == "":
          result = num[index - 2:index + 1]
        elif int(num[index - 2:index + 1]) > int(result):
          result = num[index - 2:index + 1]
    
    return result