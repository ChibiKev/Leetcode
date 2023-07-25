class Solution(object):
  def countBeautifulPairs(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    count = 0
    
    for index, num in enumerate(nums):
      firstDigit = num
      while firstDigit >= 10:
        firstDigit //= 10
      for index2 in range(index + 1, len(nums)):
        lastDigit = nums[index2] % 10
        currentFirstDigit = firstDigit
        while lastDigit != 0:
          temp = currentFirstDigit % lastDigit
          currentFirstDigit = lastDigit
          lastDigit = temp
        count += (currentFirstDigit == 1)
    
    return count