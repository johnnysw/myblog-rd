const router = require("koa-router")();
const user = require("./users");
const blog = require("./blogs");

router.get("/api/test", async (ctx) => {
  ctx.body = 'hello test';
});

router.use("/api/user", user.routes(), user.allowedMethods());
router.use("/api/blog", blog.routes(), blog.allowedMethods());

module.exports = router;
