import axios from 'axios'
import { Context } from 'koa'
import { Controller, Ctx, Get, Post, Query } from 'amala'
import { results } from '../models/results'
import _ = require('lodash')

@Controller('/info')
export default class InfoController {

  @Get('/')
  async info(@Ctx() ctx: Context) {
    await ctx.render('info')
    return ctx.response.body
  }

}
