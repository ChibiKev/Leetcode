/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
  let record = [];
  for (let op of ops){
    if (op === "+"){
      record.push(record[record.length - 1] + record[record.length - 2]);
    }
    else if (op === "D"){
      record.push(record[record.length - 1] * 2);
    }
    else if (op === "C"){
      record.pop();
    }
    else{
      record.push(parseInt(op));
    }
  }

  let total = 0;
  for (let num of record){
    total += num;
  }

  return total;
};