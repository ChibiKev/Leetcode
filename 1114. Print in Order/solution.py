import threading

class Foo(object):
  def __init__(self):
    self.firstCompleted = threading.Event()
    self.secondCompleted = threading.Event()

  def first(self, printFirst):
    """
    :type printFirst: method
    :rtype: void
    """
    # printFirst() outputs "first". Do not change or remove this line.
    printFirst()
    self.firstCompleted.set()

  def second(self, printSecond):
    """
    :type printSecond: method
    :rtype: void
    """
    self.firstCompleted.wait()
    # printSecond() outputs "second". Do not change or remove this line.
    printSecond()
    self.secondCompleted.set()
            
  def third(self, printThird):
    """
    :type printThird: method
    :rtype: void
    """
    self.secondCompleted.wait()
    # printThird() outputs "third". Do not change or remove this line.
    printThird()