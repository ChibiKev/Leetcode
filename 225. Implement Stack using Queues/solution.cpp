class MyStack {
private:
  queue<int> storage;
public:
  MyStack() {

  }
  
  void push(int x) {
    this->storage.push(x);
    for (int index = 0; index < this->storage.size() - 1; index++){
      int value = this->storage.front();
      this->storage.pop();
      this->storage.push(value);
    }
  }
  
  int pop() {
    int value = this->storage.front();
    this->storage.pop();
    return value;
  }
  
  int top() {
    return this->storage.front();
  }
  
  bool empty() {
    return this->storage.size() == 0;
  }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */