class Solution(object):
  def capitalizeTitle(self, title):
    """
    :type title: str
    :rtype: str
    """
    words = title.split()
    
    for index, word in enumerate(words):
      if len(word) > 2:
        words[index] = word.capitalize()
      else:
        words[index] = word.lower()
        
    return " ".join(words)