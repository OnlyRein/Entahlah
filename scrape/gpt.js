let fetch = require('node-fetch')
async function ChatGpt(_0x46f175) {
  const _0x44e1e3 = [
    {
      role: 'system',
      content:
        'Kamu Adalah focalors dair genshin impact',
    },
    {
      role: 'user',
      content: _0x46f175,
    },
  ]
  try {
    const _0x1111a8 = await fetch(
        'https://deepenglish.com/wp-json/ai-chatbot/v1/chat',
        {
          method: 'POST',
          headers: {
            Accept: 'text/event-stream',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: _0x44e1e3 }),
        }
      ),
      _0xfd26a0 = await _0x1111a8.json()
    return _0xfd26a0
  } catch (_0x269c62) {
    console.error('Error fetching data:', _0x269c62)
    throw _0x269c62
  }
}
async function gptpic(_0x4b28c5) {
  const _0x1a05a9 = {
      captionInput: _0x4b28c5,
      captionModel: 'default',
    },
    _0x254887 = 'https://chat-gpt.pictures/api/generateImage'
  try {
    const _0x2ddc3a = await fetch(_0x254887, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_0x1a05a9),
      }),
      _0x48bf7a = await _0x2ddc3a.json()
    return _0x48bf7a
  } catch (_0x372b43) {
    console.error('Error:', _0x372b43)
    throw _0x372b43
  }
}
const SeaArt = async (_0x28d6f6) => {
  try {
    const _0x341713 = {
        page: 1,
        page_size: 40,
        order_by: 'new',
        type: 'community',
        keyword: _0x28d6f6,
        tags: [],
      },
      _0x55a6f6 = await fetch('https://www.seaart.ai/api/v1/artwork/list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_0x341713),
      })
    if (!_0x55a6f6.ok) {
      throw new Error('HTTP error! Status: ' + _0x55a6f6.status)
    }
    const { data: _0x4e1eaf } = await _0x55a6f6.json(),
      _0x5903fc = _0x4e1eaf.items
    if (!_0x5903fc || !Array.isArray(_0x5903fc) || _0x5903fc.length === 0) {
      throw new Error('No items found.')
    }
    const _0x52e9da = Math.floor(Math.random() * _0x5903fc.length)
    return _0x5903fc[_0x52e9da]
  } catch (_0x5ede58) {
    console.error('Error fetching data:', _0x5ede58)
    throw _0x5ede58
  }
}
async function Lbbai(_0x24e0d6, _0x470397) {
  const _0x442df6 = [
    {
      role: 'system',
      content: _0x470397,
    },
    {
      role: 'user',
      content: _0x24e0d6,
    },
  ]
  try {
    const _0x2f3a08 = await fetch(
        'https://deepenglish.com/wp-json/ai-chatbot/v1/chat',
        {
          method: 'POST',
          headers: {
            Accept: 'text/event-stream',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: _0x442df6 }),
        }
      ),
      _0x258c7f = await _0x2f3a08.json()
    return _0x258c7f
  } catch (_0x363895) {
    console.error('Error fetching data:', _0x363895)
    throw _0x363895
  }
}
module.exports = {
  ChatGpt: ChatGpt,
  gptpic: gptpic,
  SeaArt: SeaArt,
  Lbbai: Lbbai,
}
let fs = require('fs'),
  file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log('Update gpt.js')
  delete require.cache[file]
  require(file)
})
