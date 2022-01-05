class Solution(object):
  def numberOfLines(self, widths, s):
    """
    :type widths: List[int]
    :type s: str
    :rtype: List[int]
    """
    row = 1
    currentPixels = 0
    
    for letter in s:
      pixels = widths[ord(letter) - 97]
      currentPixels += pixels
      if currentPixels > 100:
        row += 1
        currentPixels = pixels
      
    return [row, currentPixels]