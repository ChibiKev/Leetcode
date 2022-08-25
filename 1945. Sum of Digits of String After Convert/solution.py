class Solution(object):
  def getLucky(self, s, k):
    """
    :type s: str
    :type k: int
    :rtype: int
    """
    numbers = ""
    for letter in s:
      numbers += str(ord(letter) - 96)
    
    count = 0
    while count < k:
      newNumber = 0
      for number in numbers:
        newNumber += int(number)
      numbers = str(newNumber)
      count += 1
    
    return numbers