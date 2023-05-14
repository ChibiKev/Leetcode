/* Write your T-SQL query statement below */
SELECT Project.project_id, ROUND(AVG(Employee.experience_years * 1.0), 2) AS average_years
FROM Project
INNER JOIN Employee
ON Project.employee_id = Employee.employee_id
GROUP BY Project.project_id;