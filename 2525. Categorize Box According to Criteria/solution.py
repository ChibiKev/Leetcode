class Solution(object):
  def categorizeBox(self, length, width, height, mass):
    """
    :type length: int
    :type width: int
    :type height: int
    :type mass: int
    :rtype: str
    """
    bulky = (length >= 10000) or (width >= 10000) or (height >= 10000) or (mass >= 10000) or ((length * width * height) >= 1000000000)
    heavy = mass >= 100
    
    if bulky and heavy:
      return "Both"
    elif not bulky and not heavy:
      return "Neither"
    elif bulky and not heavy:
      return "Bulky"
    elif not bulky and heavy:
      return "Heavy"
    
    return None