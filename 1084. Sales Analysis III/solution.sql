/* Write your T-SQL query statement below */
SELECT Product.product_id, Product.product_name
FROM Product
LEFT JOIN Sales
ON Product.product_id = Sales.product_id
GROUP BY Product.product_id, Product.product_name
HAVING MIN(sale_date) >= '2019-01-01' AND MAX(sale_date) <= '2019-03-31';