# 1154. Day of the Year
Difficulty: Easy

[Link To Leetcode Problem](https://leetcode.com/problems/day-of-the-year/)

## Problem
Given a string `date` representing a [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) date formatted as `YYYY-MM-DD`, return *the day number of the year.*

## Examples
### Example 1:
```
Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.
```
### Example 2:
```
Input: date = "2019-02-10"
Output: 41
```

## Constraints:
- `date.length == 10`
- `date[4] == date[7] == '-'`, and all other `date[i]`'s are digits
- `date` represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.