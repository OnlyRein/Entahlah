const cheerio = require('cheerio')
async function igdl(_0x1f1079) {
  try {
    const _0x4547f1 = await (
      await fetch(
        'https://api.lolhuman.xyz/api/instagram?apikey=gataDios&url=' +
          _0x1f1079
      )
    ).json()
    return {
      author: 'LEXIC TEAM',
      data: _0x4547f1.result,
    }
  } catch (_0x548975) {
    return '\u274C Failed to download'
  }
}
const APIs = {
    1: 'https://apkcombo.com',
    2: 'apk-dl.com',
    3: 'https://apk.support',
    4: 'https://apps.evozi.com/apk-downloader',
    5: 'http://ws75.aptoide.com/api/7',
    6: 'https://cafebazaar.ir',
  },
  Proxy = (_0x2468d1) =>
    _0x2468d1
      ? 'https://translate.google.com/translate?sl=en&tl=fr&hl=en&u=' +
        encodeURIComponent(_0x2468d1) +
        '&client=webapp'
      : '',
  api = (_0x1c2b5e, _0x2069b5 = '/', _0x43a0f1 = {}) =>
    (_0x1c2b5e in APIs ? APIs[_0x1c2b5e] : _0x1c2b5e) +
    _0x2069b5 +
    (_0x43a0f1
      ? '?' + new URLSearchParams(Object.entries({ ..._0x43a0f1 }))
      : ''),
  tools = {
    APIs: APIs,
    Proxy: Proxy,
    api: api,
  }
let apkcombo = {
    search: async function (_0x4f476f) {
      let _0x1e0290 = await fetch(
          tools.Proxy(
            tools.api(
              1,
              '/search/' + encodeURIComponent(_0x4f476f.replace(' ', '-'))
            )
          )
        ),
        _0x1b8212 = []
      _0x1e0290 = await _0x1e0290.text()
      let _0x42c83c = cheerio.load(_0x1e0290),
        _0x4db40e = [],
        _0x1f2598 = []
      _0x42c83c('div.content-apps > a').each(function (_0x1f9af6, _0xb5cada) {
        let _0x29e88c = _0x42c83c(_0xb5cada).attr('title')
        _0x1f2598.push(_0x29e88c)
        _0x4db40e.push(
          _0x42c83c(_0xb5cada)
            .attr('href')
            .replace(
              'https://apkcombo-com.translate.goog/',
              'https://apkcombo.com/'
            )
            .replace('/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp', '')
        )
      })
      for (
        var _0x2c8029 = 0;
        _0x2c8029 < (_0x1f2598.length || _0x4db40e.length);
        _0x2c8029++
      ) {
        _0x1b8212.push({
          name: _0x1f2598[_0x2c8029],
          link: _0x4db40e[_0x2c8029],
        })
      }
      return _0x1b8212
    },
    download: async function (_0x4cdc61) {
      let _0x2b6af6 = await fetch(_0x4cdc61)
      _0x2b6af6 = await _0x2b6af6.text()
      let _0x3c37f2 = cheerio.load(_0x2b6af6),
        _0x5b16c2 = _0x3c37f2('div.app_header.mt-14 > div.avatar > img').attr(
          'data-src'
        ),
        _0x11ecab = _0x3c37f2(
          'div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.author > a'
        ).html(),
        _0x3596e5 = _0x3c37f2(
          'div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.app_name > h1'
        ).text(),
        _0x4246ba =
          'https://apkcombo.com' +
          _0x3c37f2(
            'div.container > div > div.column.is-main > div.button-group.mt-14.mb-14.is-mobile-only > a'
          ).attr('href')
      _0x2b6af6 = await fetch(_0x4246ba)
      _0x2b6af6 = await _0x2b6af6.text()
      _0x3c37f2 = cheerio.load(_0x2b6af6)
      let _0x3b0eef =
        _0x3c37f2(
          '#best-variant-tab > div:nth-child(1) > ul > li > ul > li > a'
        ).attr('href') +
        '&fp=945d4e52764ab9b1ce7a8fba0bb8d68d&ip=160.177.72.111'
      return {
        img: _0x5b16c2,
        developer: _0x11ecab,
        appname: _0x3596e5,
        link: _0x3b0eef,
      }
    },
  },
  apkdl = {
    search: async function (_0x52c4b3) {
      let _0x1cbab7 = await fetch(
        tools.Proxy(tools.api(2, '/search', { q: _0x52c4b3 }))
      )
      _0x1cbab7 = await _0x1cbab7.text()
      let _0x12979f = cheerio.load(_0x1cbab7),
        _0x25af5e = [],
        _0xee3e60 = [],
        _0x3b686e = []
      _0x12979f('a.title').each(function (_0x14fe29, _0x937689) {
        let _0x51749c = _0x12979f(_0x937689).text()
        _0xee3e60.push(_0x51749c)
        _0x25af5e.push(
          _0x12979f(_0x937689)
            .attr('href')
            .replace(
              'https://apk--dl-com.translate.goog/',
              'https://apk-dl.com/'
            )
            .replace('?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp', '')
        )
      })
      for (
        var _0x56cc7c = 0;
        _0x56cc7c < (_0xee3e60.length || _0x25af5e.length);
        _0x56cc7c++
      ) {
        _0x3b686e.push({
          name: _0xee3e60[_0x56cc7c],
          link: _0x25af5e[_0x56cc7c],
        })
      }
      return _0x3b686e
    },
    download: async function (_0x2181b8) {
      let _0x3c44fa = await fetch(tools.Proxy(_0x2181b8))
      _0x3c44fa = await _0x3c44fa.text()
      let _0x2ce9d6 = cheerio.load(_0x3c44fa),
        _0x497013 = _0x2ce9d6('div.logo > img').attr('src'),
        _0x5672cf = _0x2ce9d6('div.developer > a').attr('title'),
        _0x1fe6d0 = _0x2ce9d6('div.heading > h1 > a').attr('title'),
        _0x145014 = _0x2ce9d6(
          'div.download-btn > div > a.mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.fixed-size.mdl-button--primary'
        ).attr('href')
      _0x3c44fa = await fetch(_0x145014)
      _0x3c44fa = await _0x3c44fa.text()
      _0x2ce9d6 = cheerio.load(_0x3c44fa)
      let _0x2f3814 = _0x2ce9d6('head > meta:nth-child(11)').attr('content')
      _0x2f3814 = _0x2f3814.replace('0; url=', '')
      _0x3c44fa = await fetch(_0x2f3814)
      _0x3c44fa = await _0x3c44fa.text()
      _0x2ce9d6 = cheerio.load(_0x3c44fa)
      let _0xf3d004 =
        'https:// ' +
        _0x2ce9d6(
          'body > div.mdl-layout.mdl-js-layout.mdl-layout--fixed-header > div > div > div > div > div > div > div:nth-child(1) > div:nth-child(3) > a'
        ).attr('href')
      return {
        img: _0x497013,
        developer: _0x5672cf,
        appname: _0x1fe6d0,
        link: _0xf3d004,
      }
    },
  },
  aptoide = {
    search: async function (_0x725ea6) {
      let _0x1df048 = await fetch(
          tools.api(5, '/apps/search', {
            query: _0x725ea6,
            limit: 1000,
          })
        ),
        _0x30f7c7 = {}
      return (
        (_0x1df048 = await _0x1df048.json()),
        (_0x30f7c7 = _0x1df048.datalist.list.map((_0x10d9c2) => {
          return {
            name: _0x10d9c2.name,
            id: _0x10d9c2.package,
          }
        })),
        _0x30f7c7
      )
    },
    download: async function (_0x2b72ad) {
      let _0x127838 = await fetch(
        tools.api(5, '/apps/search', {
          query: _0x2b72ad,
          limit: 1,
        })
      )
      return (
        (_0x127838 = await _0x127838.json()),
        {
          img: _0x127838.datalist.list[0].icon,
          developer: _0x127838.datalist.list[0].store.name,
          appname: _0x127838.datalist.list[0].name,
          link: _0x127838.datalist.list[0].file.path,
        }
      )
    },
  }
async function tiktok(_0x5ce26f) {
  try {
    let _0x40c988 = await fetch(
        'https://api.tiklydown.link/api/download?url=' + _0x5ce26f
      ),
      _0x40ef12 = await _0x40c988.json()
    return _0x40ef12
  } catch (_0x47c18f) {
    console.error(_0x47c18f)
    throw 'Something wrong!!'
  }
}
function facebook(_0x283b08) {
  return new Promise(async (_0x120ace, _0x4366f3) => {
    const _0x127e1d = await fetch('https://www.getfvid.com/downloader', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Referer: 'https://www.getfvid.com/',
        },
        body: new URLSearchParams(Object.entries({ url: _0x283b08 })),
      }),
      _0x39b6c0 = cheerio.load(await _0x127e1d.text())
    _0x120ace({
      result: {
        url: _0x283b08,
        title: _0x39b6c0(
          'body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-5.no-padd > div > h5 > a'
        ).text(),
        time: _0x39b6c0('#time').text(),
        hd: _0x39b6c0(
          'body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a'
        ).attr('href'),
        sd: _0x39b6c0(
          'body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(2) > a'
        ).attr('href'),
        audio: _0x39b6c0(
          'body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(3) > a'
        ).attr('href'),
      },
    })
  })
}
module.exports = {
  igdl: igdl,
  apkdl: apkdl,
  apkcombo: apkcombo,
  aptoide: aptoide,
  tiktok: tiktok,
  facebook: facebook,
}
let fs = require('fs'),
  chalk = require('chalk'),
  file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update scrape'))
  delete require.cache[file]
  require(file)
})
