const send = require("koa-send");
const Koa = require("koa");
const Router = require("koa-router");
const userAgent = require("koa-useragent");
const path = require("path");
const swig = require("swig");
const compression = require("koa-compress");
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/templates");

app.use(userAgent);
app.use(compression());

router.get(/^\/static(?:\/|$)/, async ctx => {
  let filepath = ctx.path.replace(/static\//, "");
  await send(ctx, filepath, {
    root: path.join(__dirname, "../dist")
  });
});

router.get(/^\/(.*)$/, ctx => {
  const template = swig.compileFile(path.resolve(templateRoot, "home.html"));
  ctx.body = template({});
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("listening on port 3000");
