# 1437. Check If All 1's Are at Least Length K Places Away
Difficulty: Easy

[Link To Leetcode Problem](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/)

## Problem
Given an binary array `nums` and an integer `k`, return `true` *if all* `1`*'s are at least* `k` *places away from each other, otherwise return* `false`.

## Examples
### Example 1:
![example1](./example1.png)
```
Input: nums = [1,0,0,0,1,0,0,1], k = 2
Output: true
Explanation: Each of the 1s are at least 2 places away from each other.
```
### Example 2:
![example2](./example2.png)
```
Input: nums = [1,0,0,1,0,1], k = 2
Output: false
Explanation: The second 1 and third 1 are only one apart from each other.
```

## Constraints:
- `1 <= nums.length <= 10^5`
- `0 <= k <= nums.length`
- `nums[i]` is `0` or `1`