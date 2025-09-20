# CS418 Speech to Text Subtitle Generator

A Node.js application that converts WAV audio files to subtitle files (SRT and VTT formats) using Microsoft Azure Cognitive Services Speech-to-Text API. This project provides both a command-line interface and a web interface for easy audio file processing.

## Features

- 🎵 Convert WAV audio files to subtitles
- 📝 Support for multiple subtitle formats:
  - SRT (SubRip Subtitle format)
  - VTT (WebVTT format)
- 🌍 Multi-language support (configurable)
- 🌐 Web interface for file upload
- 🖥️ Command-line interface for batch processing
- ☁️ Powered by Microsoft Azure Cognitive Services (free tier available)

## Prerequisites

- Node.js (v12 or higher)
- Microsoft Azure account with Cognitive Services Speech resource
- PHP server (for web interface)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/seannguyen-code/CS418-speechToText.git
cd CS418-speechToText
```

2. Install required Node.js dependencies:
```bash
npm install microsoft-cognitiveservices-speech-sdk
```

3. Create a `config.js` file in the root directory with your Azure credentials:
```javascript
module.exports = {
    key: 'YOUR_AZURE_SPEECH_SERVICE_KEY',
    region: 'YOUR_AZURE_REGION'  // e.g., 'eastus', 'westus2'
}
```

## Configuration

### Azure Speech Service Setup

1. Go to [Azure Portal](https://portal.azure.com/)
2. Create a new "Speech" resource
3. Copy the **Key** and **Region** from the resource overview
4. Add these values to your `config.js` file

## Usage

### Command Line Interface

Convert an audio file to subtitles using the command line:

```bash
node main.js <audio-file-path> <subtitle-type> <language>
```

**Parameters:**
- `<audio-file-path>`: Path to your WAV audio file
- `<subtitle-type>`: Either `srt` or `vtt`
- `<language>`: Language code (e.g., `en-US`, `es-ES`, `fr-FR`)

**Examples:**
```bash
# Generate SRT subtitles in English
node main.js ./audio/my_audio.wav srt en-US

# Generate VTT subtitles in Spanish
node main.js ./audio/my_audio.wav vtt es-ES

# Generate SRT subtitles in French
node main.js ./audio/my_audio.wav srt fr-FR
```

### Web Interface

1. Start a local PHP server:
```bash
php -S localhost:8000
```

2. Open `http://localhost:8000` in your browser

3. Upload a WAV file using the web form

4. Download the generated subtitle files (SRT and VTT)

## File Structure

```
CS418-speechToText/
├── main.js              # Main CLI application
├── convert.js           # Azure Speech Service integration
├── subtitle-srt.js      # SRT subtitle file generator
├── subtitle-vtt.js      # VTT subtitle file generator
├── index.html           # Web interface
├── upload.php           # File upload handler
├── config.js            # Azure credentials (create this)
├── audio/               # Audio files and generated subtitles
│   └── my_mule.wav     # Sample audio file
└── README.md
```

## Supported Languages

The application supports all languages available in Azure Cognitive Services Speech-to-Text. Common language codes include:

- `en-US` - English (United States)
- `en-GB` - English (United Kingdom)
- `es-ES` - Spanish (Spain)
- `fr-FR` - French (France)
- `de-DE` - German (Germany)
- `it-IT` - Italian (Italy)
- `pt-BR` - Portuguese (Brazil)
- `ja-JP` - Japanese (Japan)
- `ko-KR` - Korean (South Korea)
- `zh-CN` - Chinese (Mandarin, Simplified)

For a complete list, see [Azure Speech Service language support](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/language-support).

## Output

- **SRT files**: Generated in `./audio/subtitle.srt`
- **VTT files**: Generated in `./audio/subtitle.vtt`

Both formats include:
- Accurate timestamps
- Properly formatted time codes
- Clean text transcription

## Limitations

- Only supports WAV audio files
- File size limit: 500KB (configurable in `upload.php`)
- Requires internet connection for Azure API calls
- Free tier has usage limits (check Azure pricing)

## Troubleshooting

### Common Issues

1. **"Config not found" error**
   - Ensure `config.js` exists with valid Azure credentials

2. **Audio file not supported**
   - Convert your audio to WAV format first
   - Ensure file size is under 500KB

3. **Network errors**
   - Check your internet connection
   - Verify Azure service region is correct

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is part of CS418 coursework. Please respect academic integrity policies.

## Credits

- Microsoft Azure Cognitive Services for Speech-to-Text API
- CS418 course curriculum

