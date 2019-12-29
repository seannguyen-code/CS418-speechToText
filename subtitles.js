const fs = require('fs')
const crypto = require('crypto')


class Subtitle {
  constructor() {}
}

Subtitle.write = function(subtitle) {
  const fileName = crypto.randomBytes(16).toString("hex") + ".vtt"
  const filePath = './audio/' + fileName
  const stream = fs.createWriteStream(filePath)
  
  return new Promise((resolve, reject) => {
    stream.once('open', function() {
      let duration = 0
      stream.write('WEBVTT')
      subtitle.forEach(sub => {
        let startTime = duration
        duration = duration + sub.Duration
  
        if(sub.DisplayText) {
          stream.write('\n\n')
          stream.write(timeConvert(startTime) + " --> " + timeConvert(duration))
          stream.write('\n')
          stream.write(sub.DisplayText)
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

module.exports = Subtitle