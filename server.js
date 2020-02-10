const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const server = express();

server.use('/',express.static(path.join(__dirname,'public')));

server.listen(prod ? process.env.PORT : 3000,()=>{
    console.log("server on ",prod ? process.env.PORT : 3000);
})