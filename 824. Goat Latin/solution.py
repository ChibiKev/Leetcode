class Solution(object):
  def toGoatLatin(self, sentence):
    """
    :type sentence: str
    :rtype: str
    """
    vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
    listOfWords = sentence.split()
    
    for index, words in enumerate(listOfWords):
      if words[0] not in vowels:
        listOfWords[index] = words[1:] + words[:1]
      listOfWords[index] += "ma" + ("a" * (index + 1))

    return " ".join(listOfWords)