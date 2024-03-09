const cheerio = require('cheerio')
function generateRandomUserAgent() {
  const _0x3a828a = [
      '4.0.3',
      '4.1.1',
      '4.2.2',
      '4.3',
      '4.4',
      '5.0.2',
      '5.1',
      '6.0',
      '7.0',
      '8.0',
      '9.0',
      '10.0',
      '11.0',
    ],
    _0x75733a = [
      'M2004J19C',
      'S2020X3',
      'Xiaomi4S',
      'RedmiNote9',
      'SamsungS21',
      'GooglePixel5',
    ],
    _0x4eb33d = [
      'RP1A.200720.011',
      'RP1A.210505.003',
      'RP1A.210812.016',
      'QKQ1.200114.002',
      'RQ2A.210505.003',
    ],
    _0x4f94f7 = _0x75733a[Math.floor(Math.random() * _0x75733a.length)],
    _0x524f5f = _0x4eb33d[Math.floor(Math.random() * _0x4eb33d.length)],
    _0x30e208 =
      'Chrome/' +
      (Math.floor(Math.random() * 80) + 1) +
      '.' +
      (Math.floor(Math.random() * 999) + 1) +
      '.' +
      (Math.floor(Math.random() * 9999) + 1),
    _0x2d1d26 =
      'Mozilla/5.0 (Linux; Android ' +
      _0x3a828a[Math.floor(Math.random() * _0x3a828a.length)] +
      '; ' +
      _0x4f94f7 +
      ' Build/' +
      _0x524f5f +
      ') AppleWebKit/537.36 (KHTML, like Gecko) ' +
      _0x30e208 +
      ' Mobile Safari/537.36 WhatsApp/1.' +
      (Math.floor(Math.random() * 9) + 1) +
      '.' +
      (Math.floor(Math.random() * 9) + 1)
  return _0x2d1d26
}
function generateRandomIP() {
  const _0x3151e2 = () => Math.floor(Math.random() * 256)
  return _0x3151e2() + '.' + _0x3151e2() + '.' + _0x3151e2() + '.' + _0x3151e2()
}
async function talkai(_0x1e1d79, _0x27ac71) {
  try {
    const _0x8b76f4 = {
        'User-Agent': generateRandomUserAgent(),
        Referer: 'https://talkai.info/id/chat/',
        'X-Forwarded-For': generateRandomIP(),
      },
      _0x299258 = {
        temperature: 1,
        frequency_penalty: 0,
        type: _0x1e1d79,
        messagesHistory: [
          {
            from: 'chatGPT',
            content:
              'Nama ku focalorz aku adalah maskot dari RellAi sedang bisa membantu mu \uD83D\uDE0B\uD83D\uDC4D',
          },
          {
            from: 'you',
            content: _0x27ac71,
          },
        ],
        message: _0x27ac71,
      }
    let _0x38c9be
    try {
      _0x38c9be = await axios.post(
        'https://talkai.info/id/chat/send/',
        _0x299258,
        { headers: _0x8b76f4 }
      )
    } catch (_0x88a5c7) {
      console.error(
        'Error with "send" request. Falling back to "send2".',
        _0x88a5c7
      )
      _0x38c9be = await axios.post(
        'https://talkai.info/id/chat/send2/',
        _0x299258,
        { headers: _0x8b76f4 }
      )
    }
    return _0x38c9be.data
  } catch (_0x45a3e2) {
    console.error('Terjadi kesalahan:', _0x45a3e2)
  }
}
module.exports = { talkai: talkai }
let fs = require('fs'),
  chalk = require('chalk'),
  file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update scrape'))
  delete require.cache[file]
  require(file)
})
