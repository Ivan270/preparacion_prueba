-- Se requiere un ranking de los clientes que más compraron (monto de la orden, es decir, precio por cantidad pedida de cada producto de la orden) durante el año 2004, ordenado de mayor a menor suma de monto.

select c.customername, sum(od.priceeach*od.quantityordered) as sumaMontoOrdenes from orders o 
join orderdetails od
on o.ordernumber = od.ordernumber
join customers c
on o.customernumber = c.customernumber
where o.orderdate >= '2004-01-01' AND o.orderdate < '2004-12-31'
group by c.customername
order by sumaMontoOrdenes DESC