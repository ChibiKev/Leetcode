class Solution(object):
  def findGCD(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    smallestNumber = float('inf')
    largestNumber = 0
    for num in nums:
      if smallestNumber > num:
        smallestNumber = num
      if largestNumber < num:
        largestNumber = num
    
    while smallestNumber:
      temp = largestNumber
      largestNumber = smallestNumber
      smallestNumber = temp % smallestNumber
      
    return largestNumber