// 路由相关
const Router = require('koa-router')
const router = new Router()
// 工具相关
const { COLLECTION } = require('../util/consts.js')

router.post('/host/create', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/host/delete', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.post('/host/update', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

router.get('/host/feed', async (ctx, next) => {
    const token = ctx.tokenVerify
    return next()
})

module.exports = router