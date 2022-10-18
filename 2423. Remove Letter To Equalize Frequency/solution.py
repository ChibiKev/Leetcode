class Solution(object):
  def equalFrequency(self, word):
    """
    :type word: str
    :rtype: bool
    """
    letters = [0] * 26
    for letter in word:
      letters[ord(letter) - 97] += 1
    
    for letter in word:
      letters[ord(letter) - 97] -= 1
      amount = 0
      missing = True
      for value in letters:
        if value == 0:
          continue
        elif amount == 0:
          amount = value
        elif amount == value:
          continue
        else:
          missing = False
          break
      if missing:
        return True
      letters[ord(letter) - 97] += 1

    return False