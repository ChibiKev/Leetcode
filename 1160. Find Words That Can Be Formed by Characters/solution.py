class Solution(object):
  def countCharacters(self, words, chars):
    """
    :type words: List[str]
    :type chars: str
    :rtype: int
    """
    
    result = 0
    charDictionary = {}
    for char in chars:
      if not char in charDictionary:
        charDictionary[char] = 1
      else:
        charDictionary[char] += 1
    
    for word in words:
      charSub = charDictionary.copy()
      counter = 0
      for character in word:
        if character in charSub:
          if charSub[character] > 0:
            counter += 1
            charSub[character] -= 1
          else:
            counter = 0
            break
        else:
          counter = 0
          break
      result += counter

    return result