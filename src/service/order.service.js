const Order = require('../model/order.model');


const findOrderById = (id) => Order.findById(id);

const findAllOrders = (limit, offset) => Order.find().limit(limit).skip(offset);

const createOrder = (newOrder) => Order.create(newOrder);

const deleteOrder = (id) => Order.findByIdAndDelete(id);

const updateStatusOrder = (id) => {
  return Order.findOneAndUpdate(
    {
      _id: id
    },
    {
      $set: {completed: true}
    }
  );
}

module.exports = {
  findOrderById,
  findAllOrders,
  createOrder,
  deleteOrder,
  updateStatusOrder
}