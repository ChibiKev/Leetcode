class Solution(object):
  def percentageLetter(self, s, letter):
    """
    :type s: str
    :type letter: str
    :rtype: int
    """
    amount = 0.00
    for value in s:
      if value == letter:
        amount += 1
    return int(amount / len(s) * 100)