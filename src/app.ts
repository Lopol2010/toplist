import 'reflect-metadata'
import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { bootstrapControllers } from 'amala'
import * as cors from '@koa/cors'
import * as Router from 'koa-router'
import IndexController from './controllers/index'
import StatsController from './controllers/stats'
import InfoController from './controllers/info'

const etag = require('koa-etag');
var serve = require('koa-static')
var ECT = require('ect')
var hbs = require('koahub-handlebars');

var renderer = ECT({ root : __dirname + '/views', ext : '.ect', watch: true })

export const app = new Koa()
;(async () => {
  try {
    const router = new Router()
    await bootstrapControllers({
      app,
      router,
      basePath: '/',
      controllers: [
        IndexController,
        StatsController,
        InfoController,
        // __dirname + '/controllers/*'
      ],
      disableVersioning: true,
    })
    app.use(cors({ origin: '*' }))
    app.use(bodyParser())
    app.use(etag());
    app.use(serve(__dirname + '/../static', {maxage: 7 * 24 * 60 * 60 * 1000 }))
    app.use(serve(__dirname + '/css', {maxage: 7 * 24 * 60 * 60 * 1000}))
    app.use(async (ctx, next) => { 
      ctx.erender = renderer.render 
      return next()
    })
    app.use(hbs.middleware({
      viewPath: __dirname + '/views',
    }))
    app.use(router.routes())
    app.use(router.allowedMethods())
  } catch (err) {
    console.log('Koa app starting error: ', err)
  }
})()
