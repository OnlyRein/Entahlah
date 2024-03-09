handler = async (
    _0x2fcf92,
    {
      conn: _0x2f4f67,
      text: _0x3b06aa,
      usedPrefix: _0x1fcb8e,
      command: _0x287268,
    }
  ) => {
    if (!_0x3b06aa) {
      throw '\u2022 *Example:* ' + (_0x1fcb8e + _0x287268) + ' *[prompt]*'
    }
    _0x2fcf92.reply(wait)
    try {
      let _0x4a6301 = await (
        await axios.get(
          'https://api.maelyn.my.id/api/bingimage?prompt=' +
            _0x3b06aa +
            '&apikey=aYDwNcVXaR'
        )
      ).data
      for (let _0x21058d of _0x4a6301.result) {
        _0x2f4f67.sendMessage(
          _0x2fcf92.chat,
          {
            image: { url: _0x21058d },
            caption: '*Bing Ai Generate Image*\n\n*Prompt:* ' + _0x3b06aa,
          },
          { quoted: _0x2fcf92 }
        )
      }
    } catch (_0x2fe034) {
      _0x2fcf92.reply('Bing Image down, please try again later...')
    }
  }
  handler.help = ['bingimg'].map((_0x3a03d7) => _0x3a03d7 + ' *[prompt]*')
  handler.tags = ['ai']
  handler.command = ['bingimg']
  handler.premium = true
  module.exports = handler
  