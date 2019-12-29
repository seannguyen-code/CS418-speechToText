const convert = require('./convert')
const subtitle = require('./subtitles')

const filename = "my_mule.wav"
convert.speechToText(filename).then(result => {
    console.log(result);
    subtitle.write(result)})


