const Router = require('koa-router');
const userCtrl = require('./userCtrl');

const users = new Router();

users.get('/user',userCtrl.getUsers);

module.exports = users;

