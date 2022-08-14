class Solution(object):
  def mostCommonWord(self, paragraph, banned):
    """
    :type paragraph: str
    :type banned: List[str]
    :rtype: str
    """
    bannedSet = set(banned)
    dictionary = {}
    word = ""
    
    for index, letter in enumerate(paragraph):
      if letter != "!" and letter != "?" and letter != "'" and letter != "," and letter != ";" and letter != "." and letter != " ":
        word += letter
      if letter == "!" or letter == "?" or letter == "'" or letter == "," or letter == ";" or letter == "." or letter == " "  or index == len(paragraph) - 1:
        if word == "":
          continue
        word = word.lower()
        if word not in bannedSet: 
          if not word in dictionary:
            dictionary[word] = 1
          else:
            dictionary[word] += 1
        word = ""
      
    maxKey = ""
    maxValue = 0
    
    for key in dictionary:
      if dictionary[key] > maxValue:
        maxKey = key
        maxValue = dictionary[key]
        
    return maxKey