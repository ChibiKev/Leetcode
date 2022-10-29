class Solution(object):
  def minNumberOfHours(self, initialEnergy, initialExperience, energy, experience):
    """
    :type initialEnergy: int
    :type initialExperience: int
    :type energy: List[int]
    :type experience: List[int]
    :rtype: int
    """
    hours = 0
    for nrg, exp in zip(energy, experience):
      if nrg >= initialEnergy:
        hours += nrg - initialEnergy + 1
        initialEnergy += nrg - initialEnergy + 1
      if exp >= initialExperience:
        hours += exp - initialExperience + 1
        initialExperience += exp - initialExperience + 1

      initialEnergy -= nrg
      initialExperience += exp

    return hours