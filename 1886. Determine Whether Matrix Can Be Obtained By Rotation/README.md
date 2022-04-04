# 1886. Determine Whether Matrix Can Be Obtained By Rotation
Difficulty: Easy

[Link To Leetcode Problem](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/)

## Problem
Given two `n x n` binary matrices `mat` and `target`, return `true` *if it is possible to make* `mat` *equal to* `target` *by **rotating*** `mat` *in **90-degree increments**, or* `false` *otherwise.*

## Examples
### Example 1:
![example1](./example1.png)
```
Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
Output: true
Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.
```
### Example 2:
![example2](./example2.png)
```
Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
Output: false
Explanation: It is impossible to make mat equal to target by rotating mat.
```
### Example 3:
![example3](./example3.png)
```
Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
Output: true
Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.
```

## Constraints:
- `n == mat.length == target.length`
- `n == mat[i].length == target[i].length`
- `1 <= n <= 10`
- `mat[i][j] `and `target[i][j]` are either `0` or `1`.