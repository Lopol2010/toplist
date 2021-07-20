import 'reflect-metadata'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { bootstrapControllers } from 'amala'
import * as cors from '@koa/cors'
import * as Router from 'koa-router'
import StatsController from './controllers/stats'

var serve = require('koa-static')
var ECT = require('ect')
var renderer = ECT({ root : __dirname + '/views', ext : '.ect', watch: true })
// var views = require('koa-views');
// const render = views(__dirname + '/views', {
//   extension: 'ect',
//   map: {
//     ect: 'ect'
//   }
// })

export const app = new Koa()
;(async () => {
  try {
    const router = new Router()
    await bootstrapControllers({
      app,
      router,
      basePath: '/',
      controllers: [
        StatsController
        // __dirname + '/controllers/*'
      ],
      disableVersioning: true,
    })
    app.use(cors({ origin: '*' }))
    app.use(bodyParser())
    app.use(serve(__dirname + '/views'))
    app.use(async (ctx, next) => { 
      ctx.render = renderer.render 
      return next()
    })
    app.use(router.routes())
    app.use(router.allowedMethods())
  } catch (err) {
    console.log('Koa app starting error: ', err)
  }
})()
