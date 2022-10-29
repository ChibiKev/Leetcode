class Solution {
public:
  int minNumberOfHours(int initialEnergy, int initialExperience, vector<int>& energy, vector<int>& experience) {
    int hours = 0;
    for (int index = 0; index < energy.size(); index++){
      int nrg = energy[index];
      int exp = experience[index];
      if (nrg >= initialEnergy){
        hours += nrg - initialEnergy + 1;
        initialEnergy += nrg - initialEnergy + 1;
      }
      if (exp >= initialExperience){
        hours += exp - initialExperience + 1;
        initialExperience += exp - initialExperience + 1;
      }

      initialEnergy -= nrg;
      initialExperience += exp;
    }

    return hours;
  }
};