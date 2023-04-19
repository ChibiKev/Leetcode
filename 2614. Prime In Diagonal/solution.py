class Solution(object):
  def diagonalPrime(self, nums):
    """
    :type nums: List[List[int]]
    :rtype: int
    """
    result = 0
    for index in range(len(nums)):
      diagonal = nums[index][index]
      diagonalPrime = True
      if diagonal < 2:
        diagonalPrime = False
      else:
        squaredDiagonal = int(sqrt(diagonal))
        for index2 in range(2, squaredDiagonal + 1):
          if diagonal % index2 == 0:
            diagonalPrime = False
            break
      if diagonalPrime and diagonal > result:
          result = diagonal
      
      secondDiagonal = nums[len(nums) - index - 1][index]
      secondDiagonalPrime = True
      if secondDiagonal < 2:
        secondDiagonalPrime = False
      else:
        squaredSecondDiagonal = int(sqrt(secondDiagonal))
        for index2 in range(2, squaredSecondDiagonal + 1):
          if secondDiagonal % index2 == 0:
            secondDiagonalPrime = False
            break
      if secondDiagonalPrime and secondDiagonal > result:
          result = secondDiagonal
    return result