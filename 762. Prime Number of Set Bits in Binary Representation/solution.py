class Solution(object):
  def countPrimeSetBits(self, left, right):
    """
    :type left: int
    :type right: int
    :rtype: int
    """
    primes = set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
    count = 0
    for index in range(left, right + 1):
      binary = bin(index)
      bits = binary.count('1')
      if bits in primes:
        count += 1
    return count