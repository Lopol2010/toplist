import axios from 'axios'
import { Context } from 'koa'
import { Controller, Ctx, Get, Post, Query } from 'amala'
import { results } from '../models/results'
import _ = require('lodash')

// let style = require('../views/style/info.sass')
// import style from '../views/style/info.sass'

@Controller('/info')
export default class InfoController {

  @Get('/')
  async info(@Ctx() ctx: Context) {
    // console.log(style)
    await ctx.render('info')
    return ctx.response.body
  }

}

