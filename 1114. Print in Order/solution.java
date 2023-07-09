class Foo {
  private Semaphore firstCompleted;
  private Semaphore secondCompleted;

  public Foo() {
    firstCompleted = new Semaphore(0);
    secondCompleted = new Semaphore(0);
  }

  public void first(Runnable printFirst) throws InterruptedException {
    // printFirst.run() outputs "first". Do not change or remove this line.
    printFirst.run();
    firstCompleted.release();
  }

  public void second(Runnable printSecond) throws InterruptedException {
    firstCompleted.acquire();
    // printSecond.run() outputs "second". Do not change or remove this line.
    printSecond.run();
    secondCompleted.release();
  }

  public void third(Runnable printThird) throws InterruptedException {
    secondCompleted.acquire();
    // printThird.run() outputs "third". Do not change or remove this line.
    printThird.run();
  }
}