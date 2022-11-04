/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
 var haveConflict = function(event1, event2) {
  let event1Start = (parseInt(event1[0].slice(0,2)) * 60) + parseInt(event1[0].slice(3,5));
  let event1End = (parseInt(event1[1].slice(0,2)) * 60) + parseInt(event1[1].slice(3,5));
  let event2Start = (parseInt(event2[0].slice(0,2)) * 60) + parseInt(event2[0].slice(3,5));
  let event2End = (parseInt(event2[1].slice(0,2)) * 60) + parseInt(event2[1].slice(3,5));

  if (event1Start <= event2Start && event2Start <= event1End){
    return true;
  }
  else if (event1Start <= event2End && event2End <= event1End){
    return true;
  }
  else if (event2Start <= event1Start && event1Start <= event2End){
    return true;
  }
  else if (event2Start <= event1End && event1End <= event2End){
    return true;
  }
  
  return false;
};