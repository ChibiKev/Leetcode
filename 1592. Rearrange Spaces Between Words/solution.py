class Solution(object):
  def reorderSpaces(self, text):
    """
    :type text: str
    :rtype: str
    """
    words = text.split()
    spaces = 0
    for letter in text:
      if letter == ' ':
        spaces += 1
    
    gap = 0
    if len(words) != 1:
      gap = spaces // (len(words) - 1)
    
    extraSpaces = spaces - gap * (len(words) - 1)
    
    spacesBetween = ""
    for index in range(0, gap):
      spacesBetween += " "
    
    endingSpaces = ""
    for index in range(0, extraSpaces):
      endingSpaces += " "
    
    result = ""
    for index, word in enumerate(words):
      result += word
      if index != len(words) - 1:
        result += spacesBetween
      else:
        result += endingSpaces
        
    return result