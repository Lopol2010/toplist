import axios from 'axios'
import { Context } from 'koa'
import { Controller, Ctx, Get, Post, Query } from 'amala'
import { results } from '../models/results'
import _ = require('lodash')
import { formatMS } from '../helpers/time'

@Controller('/stats')
export default class StatsController {

  @Get('/')
  async stats(@Ctx() ctx: Context, @Query('pid') pid: number, @Query('mid') mid: number, @Query('cat') cat: number, @Query('map') map: string) {
    let data = await results.getMapStats(mid, cat)
    data.results = data.results.map(v => { v.besttime = formatMS(v.besttime); return v; })
    data.pid = pid
    data.mid = mid
    data.map = map
    data.categories = [
      { name: 'Bhop', id: 6 },
      { name: '100fps', id: 0 },
      { name: 'Crazy Speed', id: 7 },
      { name: '2k', id: 8 },
      { name: 'Low Gravity', id: 9 },
    ]
    let view = await ctx.erender('top', { data: data })
    return view
  }

}

