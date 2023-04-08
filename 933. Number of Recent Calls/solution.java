class RecentCounter {
private Queue<Integer> myQueue = new LinkedList();
  public RecentCounter() {
      
  }
  
  public int ping(int t) {
    this.myQueue.add(t);
    while (this.myQueue.peek() < t - 3000){
      this.myQueue.remove();
    }
    return this.myQueue.size();
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter obj = new RecentCounter();
 * int param_1 = obj.ping(t);
 */