/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
  let letterLogs = [];
  let digitLogs = [];
  
  let result = [];
  logs.forEach(log => {
    if (/ \d/.test(log)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  })
  
  letterLogs.sort((a, b) => {
    let aBody = a.slice(a.indexOf(' ') + 1);
    let bBody = b.slice(b.indexOf(' ') + 1);
    let c = aBody.localeCompare(bBody);
    if (c) return c;
    return a.localeCompare(b);
  })
  
  result = [...letterLogs, ...digitLogs];
  
  return result;
};