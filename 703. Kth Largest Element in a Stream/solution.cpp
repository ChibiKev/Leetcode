class KthLargest {
private:
  int largestAmount;
  priority_queue<int, vector<int>, greater<int>> priorityQueue;
public:
  KthLargest(int k, vector<int>& nums) {
    this->largestAmount = k;
    for (int index = 0; index < nums.size(); index++){
      this->priorityQueue.push(nums[index]);
      if (this->priorityQueue.size() > k){
        this->priorityQueue.pop();
      }
    }
  }
  
  int add(int val) {
    this->priorityQueue.push(val);
    if (this->priorityQueue.size() > this->largestAmount){
      this->priorityQueue.pop();
    }
    return this->priorityQueue.top();
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */