/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let result = 0;
  for (let index = 0; index < accounts.length; index++){
    let account = accounts[index];
    let total = 0;
    for (let index2 = 0; index2 < account.length; index2++){
      let money = account[index2];
      total += money;
    }
    if (total > result){
      result = total;
    }
  }
  return result;
};