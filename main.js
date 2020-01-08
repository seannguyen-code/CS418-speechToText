const convert = require('./convert')
const subtitlevtt = require('./subtitle-vtt')
const subtitlesrt = require('./subtitle-srt')

// var uploadfile = document.getElementById("fileToUpload")
// var convertProcess = document.getElementById('convertProcess')
// var subSrt = document.getElementById('s1')
// var subVtt = document.getElementById('s2')

//subSrt.innerHTML = "Download"

const filename = process.argv[2]
const typeSubtitle = process.argv[3]
const language = process.argv[4]


function main() {
    convert.speechToText(filename, language).then(result => {
    
        console.log(result)
    try {
        if (typeSubtitle === 'srt') {
           subtitlesrt.write(result)
        }
        else if (typeSubtitle === 'vtt') {
           subtitlevtt.write(result)
        }
        else if (typeSubtitle != 'srt' || typeSubtitle != 'vtt') {
        throw "Subtitle Type NOT FOUND";
    }
        }
    catch(e) {console.log(e)}  
    })}
    
main()
// node main.js filename subtype language