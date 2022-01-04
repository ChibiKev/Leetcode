/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
  let result = new Set();
  
  for (let email of emails){
    let seperatedEmail = email.split("@");
    let localName = seperatedEmail[0].split('+')[0].replaceAll('.', '');
    let newEmail = localName + '@' + seperatedEmail[1];
    result.add(newEmail);
  }
  
  return result.size;
};