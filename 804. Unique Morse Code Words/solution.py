class Solution(object):
  def uniqueMorseRepresentations(self, words):
    """
    :type words: List[str]
    :rtype: int
    """
    morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    result = set()
    
    for word in words:
      code = ""
      for character in word:
        value = morseCode[ord(character) - 97]
        code += value
      result.add(code)
    return len(result)