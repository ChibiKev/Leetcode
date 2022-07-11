class Solution(object):
  def reformatNumber(self, number):
    """
    :type number: str
    :rtype: str
    """
    formatted = number.replace("-","").replace(" ", "")
    result = ""
    for index, number in enumerate(formatted):
      if len(formatted) - index < 5 and (len(formatted) < 5 or result[-1] == "-"):
        if len(formatted) - index == 2:
          result += formatted[index: index + 2]
        elif len(formatted) - index == 3:
          result += formatted[index: index + 3]
        elif len(formatted) - index == 4:
          result += formatted[index: index + 2] + "-" + formatted[index + 2: index + 4]
        break
      result += number
      if (index + 1) % 3 == 0:
        result += "-"
    return result