class Solution(object):
  def numPrimeArrangements(self, n):
    """
    :type n: int
    :rtype: int
    """
    primeNumbers = [True] * (n + 1)

    for value in range(2, int(sqrt(n)) + 1):
      if primeNumbers[value]:
        for composite in range(value * value, n + 1, value):
          primeNumbers[composite] = False
    
    count = 0
    for prime in primeNumbers[2:]:
      count += prime
    
    return factorial(count) * factorial(n - count) % (10**9 + 7)