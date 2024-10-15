// Dependencies
const express = require('express');

require('dotenv').config();

// Internal Requires
const connectToDatabase = require('./src/database/database');
const userRouter = require('./src/router/user.router');
const authRouter = require('./src/router/auth.router');
const productRouter = require('./src/router/product.router');
const categoryRouter = require('./src/router/category.router');
const shoppCartRouter = require('./src/router/shoppCart.router');
const orderRouter = require('./src/router/order.router');

// Starting database connection
connectToDatabase();

// Starting application
const app = express();

app.use(express.json());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);
app.use('/shoppCart', shoppCartRouter);
app.use('/order', orderRouter);

// Main route
app.get('/', (req,res) => {
  res.send("Home");
})

module.exports = app;