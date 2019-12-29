const convert = require('./convert')
const subtitle = require('./subtitles')

const filename = "maybe-next-time-huh.wav"
convert.speechToText(filename).then(result => {
    console.log(result);
    subtitle.write(result)})

