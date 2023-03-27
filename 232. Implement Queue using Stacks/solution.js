var MyQueue = function() {
  this.storagePush = [];
  this.storagePop = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.storagePush.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this.peek();
  let value = this.storagePop[this.storagePop.length - 1];
  this.storagePop.pop();
  return value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.storagePop.length == 0){
    while (this.storagePush.length > 0){
      let value = this.storagePush[this.storagePush.length - 1];
      this.storagePush.pop();
      this.storagePop.push(value);
    }
  }
  return this.storagePop[this.storagePop.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.storagePush.length + this.storagePop.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */