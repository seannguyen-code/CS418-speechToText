const convert = require('./convert')
const subtitlevtt = require('./subtitle-vtt')
const subtitlesrt = require('./subtitle-srt')

const filename = "my_mule.wav"
convert.speechToText(filename).then(result => {
    console.log(result);
    subtitlesrt.write(result)})


