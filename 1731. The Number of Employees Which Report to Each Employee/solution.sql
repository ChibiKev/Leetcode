/* Write your T-SQL query statement below */
SELECT Managers.employee_id,
       Managers.name,
       COUNT(Employees.employee_id) AS reports_count,
       ROUND(AVG(Employees.age * 1.0), 0) AS average_age
FROM Employees AS Managers, Employees
WHERE Managers.employee_id = Employees.reports_to
GROUP BY Managers.employee_id, Managers.name
ORDER BY Managers.employee_id ASC;