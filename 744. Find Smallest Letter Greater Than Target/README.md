# 744. Find Smallest Letter Greater Than Target
Difficulty: Easy

[Link To Leetcode Problem](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)

## Problem
Given a characters array `letters` that is sorted in **non-decreasing** order and a character `target`, return *the smallest character in the array that is larger than* `target`.

**Note** that the letters wrap around.

- For example, if `target == 'z'` and `letters == ['a', 'b']`, the answer is `'a'`.

## Examples
### Example 1:
```
Input: letters = ["c","f","j"], target = "a"
Output: "c"
```
### Example 2:
```
Input: letters = ["c","f","j"], target = "c"
Output: "f"
```
### Example 3:
```
Input: letters = ["c","f","j"], target = "d"
Output: "f"
```

## Constraints:
- `2 <= letters.length <= 10^4`
- `letters[i]` is a lowercase English letter.
- `letters` is sorted in **non-decreasing** order.
- `letters` contains at least two different characters.
- `target` is a lowercase English letter.