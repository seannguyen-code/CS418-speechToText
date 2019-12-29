const fs = require('fs')
const sdk = require('microsoft-cognitiveservices-speech-sdk')

class Convert {
    constructor() {}
}

Convert.serviceRegion = ''
Convert.subscriptionKey = ''

Convert.speechToText = function(filename, language = 'en-US') {
    const filePath = '' // add file path
    const pushStream = sdk.AudioInputStream.createPushStream()

    fs.createReadStream(filePath)
    .on('data', function(arrayBuffer) {
        pushStream.write(arrayBuffer.buffer)
    })
    .on('end',function() {
        pushStream.close()
    })

    const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream)
    const speechConfig = sdk.SpeechConfig.fromSubscription(this.subscriptionKey,this.serviceRegion)

    speechConfig.speechRecognitionLanguage = language

    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig)

    recognizer.startContinuousRecognitionAsync()

    return new Promise((rel, rej) => {
        let result = []

        recognizer.recognized = (reg, event) => {
            result.push(JSON.parse(event.privResult.privJson))
        }
        
        recognizer.sessionStopped = () => {
            resolve(result)
            fs.unlinkSync(filePath)
        }
     
    })
    
}

module.exports = Convert