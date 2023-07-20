-- Se requiere una nómina con los datos de los representantes de venta (Sales Rep) junto al país y oficina al cual pertenece. Ordene alfabéticamente por país, ciudad y primer nombre.

SELECT o.country, o.city, e.firstName, e.lastName, e.email FROM employees e
JOIN offices o
ON e.officecode = o.officecode
WHERE e.jobtitle = 'Sales Rep'
ORDER BY country, city, firstName ASC;