class Solution {
  public int tribonacci(int n) {
    List<Integer> fib = new ArrayList<Integer>(Arrays.asList(0, 1, 1));
    for (int index = 3; index < n + 1; index++){
      fib.set(index % 3, fib.get(index % 3) + fib.get((index + 1) % 3) + fib.get((index + 2) % 3));
    }
    return fib.get(n % 3);
  }
}