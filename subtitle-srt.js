const fs = require('fs')


class SubtitleSRT {
  constructor() {}
}

SubtitleSRT.write = function(subtitle) {
  const fileName = "subtitle.srt"
  const filePath = './audio/' + fileName
  const stream = fs.createWriteStream(filePath)
  
  return new Promise((resolve, reject) => {
    stream.once('open', function() {
      let duration = 0
      let id = 0

      subtitle.forEach(sub => {
        id += 1
        let startTime = duration
        duration = duration + sub.Duration

        if(sub.DisplayText) {
          stream.write(String(id))
          stream.write('\n')
          stream.write( (timeConvert(startTime)).replace(".",",")  + " --> " + (timeConvert(duration)).replace(".",",") )
          stream.write('\n')
          stream.write(sub.DisplayText)
          stream.write('\n\n')
        }
      })
      stream.close()
      resolve(fileName)
    })
  })
}

function timeConvert(time) {
  time = time / 10000000
  var seconds = (time % 60).toFixed(3)
  var minutes = Math.floor(time / 60) % 60
  var hours = Math.floor(time / 3600)

  minutes = minutes < 10 ? `0${minutes}` : minutes
  seconds = seconds < 10 ? `0${seconds}` : seconds
  hours = hours < 10 ? `0${hours}` : hours

  return `${hours}:${minutes}:${seconds}`
}

module.exports = SubtitleSRT