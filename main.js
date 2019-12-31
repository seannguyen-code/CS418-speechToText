const convert = require('./convert')
const subtitlevtt = require('./subtitle-vtt')
const subtitlesrt = require('./subtitle-srt')

const filename = process.argv[2]
const typeSubtitle = process.argv[3]
const language = process.argv[4]

function main() {
convert.speechToText(filename, language).then(result => {

    //console.log(result)
try {
    if (typeSubtitle === 'srt') {
       subtitlesrt.write(result)
    }
    if (typeSubtitle === 'vtt') {
       subtitlevtt.write(result)
    }
    else throw console.error("Subtitle Type NOT FOUND");
    }
catch(e) {console.log(e)}  
})
}

main()
// node main.js filename subtype language