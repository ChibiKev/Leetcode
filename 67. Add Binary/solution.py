class Solution(object):
  def addBinary(self, a, b):
    """
    :type a: str
    :type b: str
    :rtype: str
    """
    result = ""
    aIndex = len(a) - 1
    bIndex = len(b) - 1
    carry = 0
    while aIndex > -1 or bIndex > -1:
      total = carry
      if aIndex > -1:
        total += ord(a[aIndex]) - ord('0')
      if bIndex > -1:
        total += ord(b[bIndex]) - ord('0')
      aIndex -= 1
      bIndex -= 1
      if total > 1:
        carry = 1
      else:
        carry = 0
      result += str(total % 2)

    if carry != 0:
      result += str(carry)
      
    result = result[::-1]
    return result