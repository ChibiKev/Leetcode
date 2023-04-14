/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function(money, children) {
  let remainingMoney = money - children;
  if (remainingMoney < 0){
    return -1;
  }
  if (Math.floor(remainingMoney / 7) == children && remainingMoney % 7 == 0){
    return children;
  }
  if (Math.floor(remainingMoney / 7) == children - 1 && remainingMoney % 7 == 3){
    return children - 2;
  }
  
  let result = children - 1;
  if (Math.floor(remainingMoney / 7) < result){
    result = Math.floor(remainingMoney / 7);
  }
  return result;
};