class Solution(object):
  def fib(self, n):
    """
    :type n: int
    :rtype: int
    """
    memo = []
    for index in range(0, n + 1):
      if index == 0 or index == 1:
        memo.append(index)
      else:
        memo.append(memo[index - 1] + memo[index - 2])
    return memo[-1]