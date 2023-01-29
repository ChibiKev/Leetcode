class Solution(object):
  def romanToInt(self, s):
    """
    :type s: str
    :rtype: int
    """
    index = 0
    result = 0
    dictionary = {
      "I": 1,
      "IV": 4,
      "V": 5,
      "IX": 9,
      "X": 10,
      "XL": 40,
      "L": 50,
      "XC": 90,
      "C": 100,
      "CD": 400,
      "D": 500,
      "CM": 900,
      "M": 1000
    }
    while index < len(s):
      if index + 1 < len(s) and (s[index] + s[index + 1] in dictionary):
        result += dictionary[s[index] + s[index + 1]]
        index += 2
      else:
        result += dictionary[s[index]]
        index += 1
    return result