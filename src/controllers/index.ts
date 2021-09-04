import axios from 'axios'
import { Context } from 'koa'
import { Controller, Ctx, Get, Post, Query } from 'amala'
import { results } from '../models/results'
import _ = require('lodash')

@Controller('/')
export default class IndexController {
  @Get('/')
  async stats(@Ctx() ctx: Context) {
    return '0JjRgdGC0LjQvdC90L4g0LvQuCDRgdC70LXQtNGD0Y7RidC10LUg0YPRgtCy0LXRgNC20LTQtdC90LjQtT8g0KfQtdC8INCx0L7Qu9GM0YjQtSDRgdCw0LzQvtGD0LHQuNC50YYsINGC0LXQvCDQvNC10L3RjNGI0LUg0YHQsNC80L7Rg9Cx0LjQudGGLg=='
  }

}

