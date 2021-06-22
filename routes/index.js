const router = require('koa-router')()
const user = require('./users')
const blog = require('./blogs')

router.use('/api/user', user.routes(), user.allowedMethods())
router.use('/api/blog', blog.routes(), blog.allowedMethods())

module.exports = router
