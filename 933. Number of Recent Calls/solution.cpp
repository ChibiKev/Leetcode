class RecentCounter {
private:
  queue<int> myQueue;
public:
  RecentCounter() {
    
  }
  
  int ping(int t) {
    this->myQueue.push(t);
    while (this->myQueue.front() < this->myQueue.back() - 3000){
      this->myQueue.pop();
    }
    return this->myQueue.size();
  }
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */