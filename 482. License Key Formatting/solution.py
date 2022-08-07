class Solution(object):
  def licenseKeyFormatting(self, s, k):
    """
    :type s: str
    :type k: int
    :rtype: str
    """
    nonformatted = ""
    for value in s:
      if value != "-":
        nonformatted += value
    
    amount = len(nonformatted) % k
    if len(nonformatted) % k == 0:
      amount = k
    
    result = nonformatted[:amount]
    
    while amount < len(nonformatted):
      result += "-" + nonformatted[amount:amount + k]
      amount += k
    
    return result.upper()