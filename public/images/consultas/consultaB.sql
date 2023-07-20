-- Se requiere tener un listado de los clientes que corresponden a empresas de responsabilidad limitada (Ltd), con sus límites de crédito ordenados de mayor a menor.

SELECT customernumber, customername, creditlimit FROM customers 
WHERE customername like '%Ltd%'
ORDER BY creditlimit DESC;