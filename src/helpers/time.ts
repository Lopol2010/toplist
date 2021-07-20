
export function formatMS(milliseconds: number) {
      let time = new Date(milliseconds)
      let min = time.getUTCMinutes()
      let sec = time.getUTCSeconds()
      let ms = time.getUTCMilliseconds()
      return (`${min}:${sec<10 ? '0' : ''}${sec}.${ms<10 ? '00' : (ms<100 ? '0' : '')}${ms}`)
}