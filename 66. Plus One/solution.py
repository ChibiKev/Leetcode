class Solution(object):
  def plusOne(self, digits):
    """
    :type digits: List[int]
    :rtype: List[int]
    """
    for index in range(len(digits) - 1, -1, -1):
      digits[index] = (digits[index] + 1) % 10
      if digits[index] != 0:
        return digits

    digits[0] = 1
    digits.append(0)
    return digits