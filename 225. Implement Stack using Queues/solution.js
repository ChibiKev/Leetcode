var MyStack = function() {
  this.storage = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.storage.push(x);
  for (let index = 0; index < this.storage.length - 1; index++){
    let value = this.storage[0];
    this.storage.shift();
    this.storage.push(value);
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let value = this.storage[0];
  this.storage.shift();
  return value;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.storage[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.storage.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */