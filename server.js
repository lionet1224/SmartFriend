const nodejieba = require('nodejieba')
const Koa = require('koa2')
const Router = require('koa-router')
const cors = require('koa2-cors')
const static = require('koa-static')
const app = new Koa();
const router = new Router();

router.get('/word', ctx => {
  ctx.body = nodejieba.cut(ctx.query.word);
})

app.use(cors())
app.use(static('.'))
app.use(router.routes())

app.listen(3005, () => {
  console.log('start server *:3005')
})