class Solution(object):
  def distMoney(self, money, children):
    """
    :type money: int
    :type children: int
    :rtype: int
    """
    remainingMoney = money - children
    if remainingMoney < 0:
      return -1
    if remainingMoney / 7 == children and remainingMoney % 7 == 0:
      return children
    if remainingMoney / 7 == children - 1 and remainingMoney % 7 == 3:
      return children - 2
    
    result = children - 1
    if remainingMoney // 7 < result:
      result = remainingMoney // 7
    return result