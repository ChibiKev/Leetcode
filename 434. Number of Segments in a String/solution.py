class Solution(object):
  def countSegments(self, s):
    """
    :type s: str
    :rtype: int
    """
    count = 0
    found = False
    
    for character in s:
      if character == " " and found == True:
        count += 1
        found = False
      elif character != " ":
        found = True
    
    if found == True:
      return count + 1
    
    return count