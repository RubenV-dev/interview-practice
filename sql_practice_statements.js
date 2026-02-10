//Query all columns for all american cities in the city table with population larger than 100000
Select * FROM city WHERE CountCode = 'USA' AND Population > 100000;

//Query the OrderID, CustomerName and OrderDate for all orders in the Orders table. Use an inner join to link the Orders table to the Customers table using the CustomerID field.
Select Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID

//Different Types of SQL Joins
//1. Inner Join: Returns records that have matching values in both tables.
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
//2. Left Join (or Left Outer Join): Returns all records from the left table, and the matched records from the right table. If there is no match, the result is NULL on the right side.
SELECT column_name(s)
FROM table1 LEFT JOIN table2    
ON table1.column_name = table2.column_name;
//3. Right Join (or Right Outer Join): Returns all records from the right table, and the matched records from the left table. If there is no match, the result is NULL on the left side.
SELECT column_name(s)
FROM table1 RIGHT JOIN table2
ON table1.column_name = table2.column_name;
//4. Full Join (or Full Outer Join): Returns all records when there is a match in either left or right table. If there is no match, the result is NULL from the side that does not have a match.
SELECT column_name(s)
FROM table1 FULL OUTER JOIN table2
ON table1.column_name = table2.column_name;
