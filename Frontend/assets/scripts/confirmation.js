const order = JSON.parse(localStorage.getItem('order')) || [];
const total = JSON.parse(localStorage.getItem('total')) || [];


const orderNumber = document.querySelector('#orderId span');
const orderTotal = document.querySelector('#total span');
const orderName = document.querySelector('#name span');
const orderEmail = document.querySelector('#email span');


orderNumber.innerText = order.orderId;
orderTotal.innerText = total;
orderName.innerText = order.contact.firstName;
orderEmail.innerText = order.contact.email;
// localStorage.clear();

