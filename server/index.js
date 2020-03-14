const send = require("koa-send");
const Koa = require("koa");
const Router = require("koa-router");
const userAgent = require("koa-useragent");
const path = require("path");
const swig = require("swig");
const compression = require("koa-compress");
const router = new Router();
const app = new Koa();

const templateRoot = path.join(
  __dirname,
  process.env.NODE_ENV === "development" ? "../templates" : "../dist/templates"
);

app.use(userAgent);
app.use(compression());
app.use(async (ctx, next) => {
  if (ctx.userAgent.isDesktop) {
    ctx.redirect("http://muxi-tech.xyz");
  } else {
    await next();
  }
});

router.get(/^\/static(?:\/|$)/, async ctx => {
  // process.env.NODE_ENV === 'development' 的时候，转发静态文件请求到 localhost:8080/dist 下
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
