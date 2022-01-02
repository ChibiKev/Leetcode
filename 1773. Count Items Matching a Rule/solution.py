class Solution(object):
  def countMatches(self, items, ruleKey, ruleValue):
    """
    :type items: List[List[str]]
    :type ruleKey: str
    :type ruleValue: str
    :rtype: int
    """
    ruleIndexes = {
      "type": 0,
      "color": 1,
      "name": 2
    }
    
    ruleIndex = ruleIndexes[ruleKey]
    
    count = 0
    
    for item in items:
      if item[ruleIndex] == ruleValue:
        count += 1
        
    return count