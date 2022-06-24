class Solution(object):
  def interpret(self, command):
    """
    :type command: str
    :rtype: str
    """
    result = ""
    index = 0
    while index < len(command):
      letter = command[index]
      if letter == "G":
        result += "G"
        index += 1
      elif letter == "(":
        nextLetter = command[index + 1]
        if nextLetter == ")":
          result += "o"
          index += 2
        elif nextLetter == "a":
          result += "al"
          index += 4
          
    return result