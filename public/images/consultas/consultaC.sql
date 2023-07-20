-- Se requiere tener un listado con los representantes de venta (Sales Rep) y su cartera de clientes (cantidad de empresas que atienden), ordenado de forma descendente desde la cartera más grande

select e.employeenumber, e.firstname, e.lastname, count(*) as count from customers c
join employees e
on c.salesrepemployeenumber = e.employeenumber
group by e.employeenumber
order by count DESC