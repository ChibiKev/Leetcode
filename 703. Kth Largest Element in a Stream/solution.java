class KthLargest {
  private int largestAmount;
  private PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
  public KthLargest(int k, int[] nums) {
    this.largestAmount = k;
    for (int index = 0; index < nums.length; index++){
      this.priorityQueue.add(nums[index]);
      if (this.priorityQueue.size() > k){
        this.priorityQueue.poll();
      }
    }
  }
  
  public int add(int val) {
    this.priorityQueue.add(val);
    if (this.priorityQueue.size() > this.largestAmount){
      this.priorityQueue.poll();
    }
    return this.priorityQueue.peek();
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */