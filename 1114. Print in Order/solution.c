typedef struct {
  // User defined data may be declared here.
  sem_t firstCompleted;
  sem_t secondCompleted;
} Foo;

Foo* fooCreate() {
  Foo* obj = (Foo*) malloc(sizeof(Foo));
  
  // Initialize user defined data here.
  sem_init(&obj->firstCompleted, 0, 0);
  sem_init(&obj->secondCompleted, 0, 0);
  return obj;
}

void first(Foo* obj) {
  // printFirst() outputs "first". Do not change or remove this line.
  printFirst();
  sem_post(&obj->firstCompleted);
}

void second(Foo* obj) {
  sem_wait(&obj->firstCompleted);
  // printSecond() outputs "second". Do not change or remove this line.
  printSecond();
  sem_post(&obj->secondCompleted);
}

void third(Foo* obj) {
  sem_wait(&obj->secondCompleted);
  // printThird() outputs "third". Do not change or remove this line.
  printThird();
}

void fooFree(Foo* obj) {
  // User defined data may be cleaned up here.
  free(obj);
}