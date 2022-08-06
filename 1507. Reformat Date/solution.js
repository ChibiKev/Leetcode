/**
 * @param {string} date
 * @return {string}
 */
 var reformatDate = function(date) {
  let month = {
    "Jan" : "01",
    "Feb" : "02",
    "Mar" : "03",
    "Apr" : "04",
    "May" : "05",
    "Jun" : "06",
    "Jul" : "07",
    "Aug" : "08",
    "Sep" : "09",
    "Oct" : "10",
    "Nov" : "11",
    "Dec" : "12"
  };

  if (date.length == 13){
    return date.slice(date.length - 4, date.length)  + "-" + month[date.slice(date.length - 8, date.length - 5)] + "-" + date.slice(0, 2);
  }

  return date.slice(date.length - 4, date.length) + "-" + month[date.slice(date.length - 8, date.length - 5)] + "-0" + date[0];
};