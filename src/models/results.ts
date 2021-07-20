import {db} from './index'

export let results = {
  getMapStats(map_id, category_id): Promise<any> {
    return new Promise((resolve, reject) => {

      db.all("SELECT nickname, besttime, checkpoints, gochecks \
      FROM `results` JOIN `runners` ON `runners`.id=`results`.id \
      WHERE mid=(?) AND category=(?) AND besttime ORDER BY besttime ASC LIMIT 15",

      [map_id, category_id],

      (err, rows) => {
        if(err) { reject(err); return; }

        resolve({category: category_id, results: rows})
      })
      
    })
  }
}
  




