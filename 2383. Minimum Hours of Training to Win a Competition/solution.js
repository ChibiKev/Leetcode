/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
 var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
  let hours = 0;
  for (let index = 0; index < energy.length; index++){
    let nrg = energy[index];
    let exp = experience[index];
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
};