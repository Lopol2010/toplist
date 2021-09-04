import 'module-alias/register'
import * as dotenv from 'dotenv'
dotenv.config({ path: `${__dirname}/../.env` })
import { app } from './app'
import { initSqlite } from './models/index'


if(initSqlite() == null) 
{
  console.error('sqlite3 init error! server will not start.')
}
else
{
  // Start rest
  let port = process.env.PORT || 1337
  app.listen(port).on('listening', () => {
    console.log('HTTP is listening on ' + port)
  })
}


