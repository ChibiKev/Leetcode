/* Write your T-SQL query statement below */
SELECT Users.name, SUM(Transactions.amount) as balance
FROM Users
INNER JOIN Transactions
ON Users.account = Transactions.account
GROUP BY Users.account, Users.name
HAVING SUM(Transactions.amount) > 10000;