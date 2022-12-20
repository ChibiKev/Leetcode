/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
  let completedWeeks = Math.floor(n / 7);
  let remainingDays = n % 7;
  let completedWeekMoney = Math.floor((completedWeeks * (2 * 28 + (completedWeeks - 1) * 7)) / 2);
  let remainingDaysMoney = Math.floor((remainingDays * (2 * (completedWeeks + 1) + (remainingDays - 1))) / 2);
  return completedWeekMoney + remainingDaysMoney;
};