import axios from 'axios'
import { Context } from 'koa'
import { Controller, Ctx, Get, Post, Query } from 'amala'
import { results } from '../models/results'
import _ = require('lodash')

let template = require('../views/info.ejs')
let style = require('../views/style/info.sass')

@Controller('/info')
export default class InfoController {

  @Get('/')
  async info(@Ctx() ctx: Context) {
    return template({style: style})
  }

}

