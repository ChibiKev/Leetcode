/* 
 Please write a DELETE statement and DO NOT write a SELECT statement.
 Write your T-SQL query statement below
 */
DELETE Person1
FROM Person AS Person1, Person AS Person2
WHERE Person1.email = Person2.email
AND Person1.id > Person2.id;