/* Write your T-SQL query statement below */
SELECT Weather1.id
FROM Weather AS Weather1, Weather AS Weather2
WHERE Weather1.recordDate = DATEADD(day, 1, Weather2.recordDate)
AND Weather1.temperature > Weather2.temperature;