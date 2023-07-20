-- Se requiere un ranking de ventas por oficina. Esto es, la cantidad de órdenes que han sido cursadas por los clientes, asociados a los representantes de venta de cada oficina. El listado debe estar ordenado por cantidad de ventas de mayor a menor.

select os.country, os.city, count(*) as count from orders o
join customers c
on o.customernumber = c.customernumber
join employees e
on c.salesrepemployeenumber = e.employeenumber
join offices os
on e.officecode = os.officecode
group by os.country, os.city
order by count desc