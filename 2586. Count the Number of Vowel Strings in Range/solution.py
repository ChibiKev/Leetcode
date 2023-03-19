class Solution(object):
  def vowelStrings(self, words, left, right):
    """
    :type words: List[str]
    :type left: int
    :type right: int
    :rtype: int
    """
    vowels = {'a', 'e', 'i', 'o', 'u'}
    count = 0
    for word in words[left:right + 1]:
      if word[0] in vowels and word[-1] in vowels:
        count += 1
    return count