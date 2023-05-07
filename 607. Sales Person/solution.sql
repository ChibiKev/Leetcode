/* Write your T-SQL query statement below */
SELECT SalesPerson.name
FROM SalesPerson
LEFT JOIN (
  SELECT Orders.sales_id
  FROM Orders
  INNER JOIN Company
  ON Orders.com_id = Company.com_id
  WHERE Company.name = 'RED'
) AS RedSalesPerson
ON SalesPerson.sales_id = RedSalesPerson.sales_id
WHERE RedSalesPerson.sales_id IS NULL;