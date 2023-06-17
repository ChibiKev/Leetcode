# 2621. Sleep
Difficulty: Easy

[Link To Leetcode Problem](https://leetcode.com/problems/sleep/)

## Problem
Given a positive integer `millis`, write an asyncronous function that sleeps for `millis` milliseconds. It can resolve any value.

## Examples
### Example 1:
```
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
```
### Example 2:
```
Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
```

## Constraints:
- `1 <= millis <= 1000`