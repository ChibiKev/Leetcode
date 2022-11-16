class Solution(object):
  def tribonacci(self, n):
    """
    :type n: int
    :rtype: int
    """
    fib = [0, 1, 1]
    for index in range(3, n + 1):
      fib[index % 3] += fib[(index + 1) % 3] + fib[(index + 2) % 3]
    return fib[n % 3]