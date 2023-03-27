class MyQueue {
private:
  stack<int> storagePush;
  stack<int> storagePop;
public:
  MyQueue() {
    
  }
  
  void push(int x) {
    this->storagePush.push(x);
  }
  
  int pop() {
    peek();
    int value = this->storagePop.top();
    this->storagePop.pop();
    return value;
  }
  
  int peek() {
    if (this->storagePop.size() == 0){
      while (this->storagePush.size() > 0){
        int value = this->storagePush.top();
        this->storagePush.pop();
        this->storagePop.push(value);
      }
    }
    return this->storagePop.top();
  }
  
  bool empty() {
    return this->storagePush.size() + this->storagePop.size() == 0;
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */