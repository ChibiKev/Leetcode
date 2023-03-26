class MyStack {
  private Queue<Integer> storage = new LinkedList();
  public MyStack() {
    
  }
  
  public void push(int x) {
    this.storage.add(x);
    for (int index = 0; index < this.storage.size() - 1; index++){
      int value = this.storage.peek();
      this.storage.remove();
      this.storage.add(value);
    }
  }
  
  public int pop() {
    int value = this.storage.peek();
    this.storage.remove();
    return value;
  }
  
  public int top() {
    return this.storage.peek();
  }
  
  public boolean empty() {
    return this.storage.size() == 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */