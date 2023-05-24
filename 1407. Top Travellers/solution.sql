/* Write your T-SQL query statement below */
SELECT Users.name, ISNULL(SUM(Rides.distance), 0) AS travelled_distance
FROM Users
LEFT JOIN Rides
ON Users.id = Rides.user_id
GROUP BY Rides.user_id, Users.name
ORDER BY SUM(Rides.distance) DESC, Users.name ASC;