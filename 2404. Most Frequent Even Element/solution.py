class Solution(object):
  def mostFrequentEven(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    dictionary = {}
    for num in nums:
      if num not in dictionary:
        dictionary[num] = 1
      else:
        dictionary[num] += 1
    
    minimumValue = -1
    maximumFrequency = 0

    for num in dictionary:
      if num % 2 == 0:
        if dictionary[num] > maximumFrequency:
          minimumValue = num
          maximumFrequency = dictionary[num]
        elif dictionary[num] == maximumFrequency:
          if num < minimumValue:
            minimumValue = num

    return minimumValue