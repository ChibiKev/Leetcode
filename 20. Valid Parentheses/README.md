# 20. Valid Parentheses
Difficulty: Easy

[Link To Leetcode Problem](https://leetcode.com/problems/valid-parentheses/)

## Problem
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

## Examples
### Example 1:
```
Input: s = "()"
Output: true
```
### Example 2:
```
Input: s = "()[]{}"
Output: true
```
### Example 3:
```
Input: s = "(]"
Output: false
```

## Constraints:
- `1 <= s.length <= 104`
- `s` consists of parentheses only `'()[]{}'`.
