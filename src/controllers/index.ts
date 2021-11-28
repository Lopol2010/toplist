import axios from 'axios'
import { Context } from 'koa'
import { Controller, Ctx, Get, Post, Query } from 'amala'
import { results } from '../models/results'
import _ = require('lodash')

@Controller('/')
export default class IndexController {
  @Get('/')
  async stats(@Ctx() ctx: Context) {
    return 'УЧИТЬСЯ, УЧИТЬСЯ И ЕЩЕ РАЗ УЧИТЬСЯ...'
  }

}

