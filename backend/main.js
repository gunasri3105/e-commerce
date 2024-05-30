const express = require('express');
const main = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const connectDatabase = require('./config/connectDatabase.js');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

const products = require('./routes/product.js');
const orders = require('./routes/order.js');

connectDatabase();

main.use(express.json());
main.use(cors());
main.use('/api/v1/', products);
main.use('/api/v1/', orders);

main.listen(process.env.PORT,()=>{
    console.log(`Server Listening to Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
})