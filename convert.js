const fs = require('fs')
const sdk = require('microsoft-cognitiveservices-speech-sdk')

class Convert {
    constructor() {}
}

Convert.serviceRegion = 'southeastasia'
Convert.subscriptionKey = '25c95fece70e4de7a595b0d181716e3c'

Convert.speechToText = function(filename, language = 'en-US') {
    const filePath = './audio/' + filename
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

    return new Promise((resolve, reject) => {
        let result = []

        recognizer.recognized = (r, event) => {
            result.push(JSON.parse(event.privResult.privJson))
        }

        recognizer.sessionStopped = () => {
            resolve(result)
        }
    })
}

module.exports = Convert