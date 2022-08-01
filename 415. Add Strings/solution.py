class Solution(object):
  def addStrings(self, num1, num2):
    """
    :type num1: str
    :type num2: str
    :rtype: str
    """
    num1End = len(num1) - 1
    num2End = len(num2) - 1
    carry = 0
    result = ""
    
    while num1End >= 0 or num2End >= 0 or carry == 1:
      sum = 0
      if num1End >= 0:
        sum += ord(num1[num1End]) - ord('0')
        num1End -= 1
        
      if num2End >= 0:
        sum += ord(num2[num2End]) - ord('0')
        num2End -= 1
        
      sum += carry
      carry = sum / 10
      sum = sum % 10
      result =  result + str(sum)
      
    return result[::-1]