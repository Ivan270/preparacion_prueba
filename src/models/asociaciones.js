import Customer from './Customer.model.js';
import Employee from './Employee.model.js';
import Office from './Office.model.js';
import Order from './Order.model.js';
import Orderdetail from './Orderdetail.mode.js';
import Payment from './Payment.model.js';
import Product from './Product.model.js';
import Productline from './Productline.model.js';

Order.belongsToMany(Product, {
	as: 'productcode_products',
	through: Orderdetail,
	foreignKey: 'ordernumber',
	otherKey: 'productcode',
});
Product.belongsToMany(Order, {
	as: 'ordernumber_orders',
	through: Orderdetail,
	foreignKey: 'productcode',
	otherKey: 'ordernumber',
});
Order.belongsTo(Customer, {
	as: 'customernumber_customer',
	foreignKey: 'customernumber',
});
Customer.hasMany(Order, { as: 'orders', foreignKey: 'customernumber' });
Payment.belongsTo(Customer, {
	as: 'customernumber_customer',
	foreignKey: 'customernumber',
});
Customer.hasMany(Payment, { as: 'payments', foreignKey: 'customernumber' });
Customer.belongsTo(Employee, {
	as: 'salesrepemployeenumber_employee',
	foreignKey: 'salesrepemployeenumber',
});
Employee.hasMany(Customer, {
	as: 'customers',
	foreignKey: 'salesrepemployeenumber',
});
Employee.belongsTo(Office, {
	as: 'officecode_office',
	foreignKey: 'officecode',
});
Office.hasMany(Employee, { as: 'employees', foreignKey: 'officecode' });
Orderdetail.belongsTo(Order, {
	as: 'ordernumber_order',
	foreignKey: 'ordernumber',
});
Order.hasMany(Orderdetail, { as: 'orderdetails', foreignKey: 'ordernumber' });
Product.belongsTo(Productline, {
	as: 'productline_productline',
	foreignKey: 'productline',
});
Productline.hasMany(Product, { as: 'products', foreignKey: 'productline' });
Orderdetail.belongsTo(Product, {
	as: 'productcode_product',
	foreignKey: 'productcode',
});
Product.hasMany(Orderdetail, {
	as: 'orderdetails',
	foreignKey: 'productcode',
});
