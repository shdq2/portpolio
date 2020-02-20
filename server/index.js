const koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const db = require('./database');

const users = require('./user');

const app = new koa();
const router = new Router();

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

app.use(users.routes());
app.use(bodyParser());
// router.get('/',(ctx,next) =>{
//     ctx.body = "Root Page";
// })

// router.get('/sub',(ctx,next) =>{
//     ctx.body = "Sub Page";
// })

app.use(router.routes());
app.use(router.allowedMethods());
// app.use(ctx =>{
//     ctx.body = 'hello koa';
// })
// const server = express();

// server.use('/',express.static(path.join(__dirname,'../public')));

app.listen(prod ? process.env.PORT : 4000,()=>{
    console.log("server on ",prod ? process.env.PORT : 4000);
})