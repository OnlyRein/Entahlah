/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

global.owner = [
  ["62881026950162"],
  ["62881026950162"]
]; 
global.fsizedoc = "45000000000";
global.fpagedoc = "19";
global.numberbot = "6282334226291";
global.namedoc = "Focalorz";
global.nameowner = "Focalorz",
global.bisnis = "62881026950162@s.whatsapp.net";
global.mail = "farelcuy122@gmail.com";
global.nomorown = "62881026950162";
global.dana = "62881026950162";
global.pulsa = "62881026950162";
global.ovo = "62881026950162";
global.APIs = {}
global.APIKeys = {}
global.namebot = "*Focalorz*";
global.sgc = "https://saweria.co/rein122";
global.sourceUrl = "https://saweria.co/rein122";
global.sig = "https://saweria.co/rein122";
global.swa = "wa.me/62881026950162";
global.gif = "https://telegra.ph/file/d5d4388c9c5c079e77025.mp4"; 
let cover = [ 'https://telegra.ph/file/bca8e6858de47726ba23b.jpg', 'https://telegra.ph/file/bca8e6858de47726ba23b.jpg', 'https://telegra.ph/file/bca8e6858de47726ba23b.jpg'
]
global.thumb = pickRandom(cover);
global.version = "2.0";
global.wm = "Focalorz"
global.done = "```© Focalorz 2024```";
global.fla =
  "https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text="
global.wait = "```Loading...```";
global.eror = "```[ ❌ ] Error system please Chat my Owners```"
// GANTI WM DISINI
global.packname = "🎀 Focalorz";
global.author = `Made By Rell`;

/*====================
     OTP SMS SETTING 
=======================
*/
global.litensiID = 244
global.litensiKey = "72114f96-fb26-4352-8f95-8071fa168044"
/*====================
     OTP SMS SETTING 
=======================

*/
global.multiplier = 45;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    let emot = {
      exp: "✉️",
      money: "💵",
      potion: "🥤",
      diamond: "💎",
      common: "📦",
      uncommon: "🎁",
      mythic: "🗳️",
      legendary: "🗃️",
      pet: "🎁",
      sampah: "🗑",
      armor: "🥼",
      sword: "⚔️",
      kayu: "🪵",
      batu: "🪨",
      string: "🕸️",
      kuda: "🐎",
      kucing: "🐈",
      anjing: "🐕",
      petFood: "🍖",
      gold: "👑",
      emerald: "💚",
    };
    let results = Object.keys(emot)
      .map((v) => [v, new RegExp(v, "gi")])
      .filter((v) => v[1].test(string));
    if (!results.length) return "";
    else return emot[results[0][0]];
  },
};
const Jimp = require('jimp');
const fetch = require('node-fetch');

let resizeThumb =  resize(thumb, 300, 250)
    global.Thumbnails = resizeThumb
    global.adReply = {
        contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363144038483540@newsletter',
                newsletterName: wm,
                serverMessageId: -1
            },
            businessMessageForwardInfo: {
                businessOwnerJid: bisnis
            },
            forwardingScore: 256,
externalAdReply: {
        title: `Focalorz (ver ${version})`,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: "https://アキラ.site/",
        mediaType: 1,
        renderLargerThumbnail: false
          }
        }
    }
    
let fs = require("fs");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update settings.js");
  delete require.cache[file];
  require(file);
});

async function resize(url, width, height, referer = null) {
    try {
        const fetchOptions = {
            redirect: 'follow',
            headers: {},
        };

        if (referer) {
            fetchOptions.headers['Referer'] = referer;
        }

        const response = await fetch(url, fetchOptions);

        if (response.ok) {
            const finalUrl = response.url;
            const arrayBuffer = await response.arrayBuffer();
            return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error.message);

        try {
            const undiciFetchOptions = {
                redirect: 'follow',
                headers: {},
            };

            if (referer) {
                undiciFetchOptions.headers['Referer'] = referer;
            }

            const arrayBuffer = await undiciFetch(url, undiciFetchOptions).then(response => response.arrayBuffer());
            return await Jimp.read(Buffer.from(arrayBuffer)).then(image => image.resize(width, height).getBufferAsync(Jimp.MIME_JPEG));
        } catch (retryError) {
            console.error('Retry Error:', retryError.message);
            return Buffer.from([]);
        }
    }
}

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}