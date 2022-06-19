/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
  this.list = new Array(n).fill(undefined);
  this.pointer = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  let key = idKey - 1;
  this.list[key] = value;
  if (key > this.pointer){
    return [];
  }

  while (this.pointer < this.list.length && this.list[this.pointer]){
    this.pointer += 1;
  }
  return this.list.slice(key, this.pointer);
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */