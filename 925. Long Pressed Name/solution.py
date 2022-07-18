class Solution(object):
  def isLongPressedName(self, name, typed):
    """
    :type name: str
    :type typed: str
    :rtype: bool
    """
    nameIndex = 0
    
    for index, letter in enumerate(typed):
      if nameIndex < len(name):
        if name[nameIndex] == letter:
          nameIndex += 1
          continue
      if index == 0 or letter != typed[index - 1]:
        return False
      
    return nameIndex == len(name)