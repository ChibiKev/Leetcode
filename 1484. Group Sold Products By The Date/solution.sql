/* Write your T-SQL query statement below */
select distinct_dates.sell_date, COUNT(distinct_dates.product) AS num_sold, STRING_AGG(distinct_dates.product, ',') as products
FROM ( SELECT DISTINCT sell_date, product
       FROM Activities ) AS distinct_dates
GROUP BY distinct_dates.sell_date
ORDER BY distinct_dates.sell_date ASC;