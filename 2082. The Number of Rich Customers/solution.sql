/* Write your T-SQL query statement below */
SELECT COUNT(DISTINCT customer_ID) AS rich_count
FROM Store
WHERE amount > 500;