class MyQueue {
  private Stack<Integer> storagePush = new Stack();
  private Stack<Integer> storagePop = new Stack();
  public MyQueue() {
      
  }
  
  public void push(int x) {
    this.storagePush.add(x);
  }
  
  public int pop() {
    peek();
    int value = this.storagePop.peek();
    this.storagePop.pop();
    return value;
  }
  
  public int peek() {
    if (this.storagePop.size() == 0){
      while (this.storagePush.size() > 0){
        int value = this.storagePush.peek();
        this.storagePush.pop();
        this.storagePop.add(value);
      }
    }
    return this.storagePop.peek();
  }
  
  public boolean empty() {
    return this.storagePush.size() + this.storagePop.size() == 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */