class Solution(object):
  def hasGroupsSizeX(self, deck):
    """
    :type deck: List[int]
    :rtype: bool
    """
    cardsAmount = {}
    for card in deck:
      if card not in cardsAmount:
        cardsAmount[card] = 1
      else:
        cardsAmount[card] += 1
    
    minimum = float('inf')
    for card in cardsAmount:
      if cardsAmount[card] < 2:
        return False
      if cardsAmount[card] < minimum:
        minimum = cardsAmount[card]
      
    for amount in range(2, minimum + 1):
      group = True
      for card in cardsAmount:
        if cardsAmount[card] % amount != 0:
          group = False
          break
      if group == True:
        return True

    return False