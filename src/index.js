const Koa = require('koa');
const koaWebpack = require('koa-webpack');
const webpack = require('webpack');
const config = require ('../webpack.config.js');

const app = new Koa();
app.use( async (ctx) => {
  ctx.body = 'Hello Koa2';
});

async function start() {
  const compiler = webpack(config)
  try {
    const middleware = await koaWebpack({
      compiler
    })
    app.use(middleware)
    app.listen(3000)
    console.log('lostening on port 3000');
  } catch (e) {
    console.log(e)
  }
}
console.log('starting server...');
start()
