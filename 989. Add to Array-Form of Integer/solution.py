class Solution(object):
  def addToArrayForm(self, num, k):
    """
    :type num: List[int]
    :type k: int
    :rtype: List[int]
    """
    carry = 0
    for index in range(len(num) - 1, -1, -1):
      num[index] += k % 10 + carry
      k /= 10
      carry = 0
      if num[index] > 9:
        num[index] %= 10
        carry = 1
        
    carry += k
    
    while carry > 0:
      num.insert(0, carry % 10)
      carry /= 10
    
    return num