var RecentCounter = function() {
  this.myQueue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.myQueue.push(t);
  while (this.myQueue[0] < this.myQueue[this.myQueue.length - 1] - 3000){
    this.myQueue.shift();
  }
  return this.myQueue.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */