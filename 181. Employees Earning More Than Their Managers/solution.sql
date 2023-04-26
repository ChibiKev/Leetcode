/* Write your T-SQL query statement below */
SELECT workers.name AS Employee
FROM Employee AS workers, Employee AS manager
WHERE workers.managerId = manager.id
AND workers.salary > manager.salary;