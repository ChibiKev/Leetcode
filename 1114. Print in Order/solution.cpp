class Foo {
private:
  mutex firstCompleted;
  mutex secondCompleted;
public:
  Foo() {
    firstCompleted.lock();
    secondCompleted.lock();
  }

  void first(function<void()> printFirst) {
    // printFirst() outputs "first". Do not change or remove this line.
    printFirst();
    firstCompleted.unlock();
  }

  void second(function<void()> printSecond) {
    firstCompleted.lock();
    // printSecond() outputs "second". Do not change or remove this line.
    printSecond();
    secondCompleted.unlock();
  }

  void third(function<void()> printThird) {
    secondCompleted.lock();
    // printThird() outputs "third". Do not change or remove this line.
    printThird();
  }
};