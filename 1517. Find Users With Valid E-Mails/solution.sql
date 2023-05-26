/* Write your T-SQL query statement below */
SELECT *
FROM Users
WHERE mail LIKE '[a-z]%@leetcode.com' AND
      mail NOT LIKE '%[^a-z0-9._-]%@leetcode.com';