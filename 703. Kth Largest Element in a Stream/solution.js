/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.largestAmount = k;
  this.priorityQueue = new MinPriorityQueue();
  for (let index = 0; index < nums.length; index++){
    this.priorityQueue.enqueue(nums[index]);
    if (this.priorityQueue.size() > k){
      this.priorityQueue.dequeue().element;
    }
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.priorityQueue.enqueue(val);
  if (this.priorityQueue.size() > this.largestAmount){
    this.priorityQueue.dequeue().element;
  }
  return this.priorityQueue.front().element;
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */