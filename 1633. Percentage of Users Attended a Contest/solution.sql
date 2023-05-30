/* Write your T-SQL query statement below */
SELECT
  Register.contest_id,
  ROUND((COUNT(Register.user_id) * 100.0) / (
    SELECT COUNT(*)
    FROM Users
  ), 2) AS percentage
FROM Register
INNER JOIN Users
ON Register.user_id = Users.user_id
GROUP BY Register.contest_id
ORDER BY percentage DESC, Register.contest_id ASC;