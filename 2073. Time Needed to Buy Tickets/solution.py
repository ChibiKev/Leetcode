class Solution(object):
  def timeRequiredToBuy(self, tickets, k):
    """
    :type tickets: List[int]
    :type k: int
    :rtype: int
    """
    total = 0
    amount = tickets[k]
    
    for index, ticket in enumerate(tickets):
      if index <= k:
        if amount < ticket:
          total += amount
        else:
          total += ticket
      elif index > k:
        if amount - 1 < ticket:
          total += amount - 1
        else:
          total += ticket
          
    return total