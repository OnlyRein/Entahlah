let handler = async (m, { conn }) => {
const Script =`*• I N F O   S C R I P T :*\n• ${Func.texted("monospace", `Script ini buatan Rell`)}\n*┌  ◦  Name:* Focalorz-MD\n*│  ◦  Version:* ${version} *( Latest )*\n*│  ◦  Create at:* 5 Feb 2024\n*`

conn.reply(m.chat, Script, m, {
        contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363144038483540@newsletter',
                newsletterName: "[ ✓ ] rell 2m",
                serverMessageId: -1
            },
            businessMessageForwardInfo: {
                businessOwnerJid: conn.user.jid
            },
            forwardingScore: 256,
externalAdReply: {
        title: `Focalorz (ver ${version})`,
        body: wm,
        thumbnailUrl: "https://telegra.ph/file/bca8e6858de47726ba23b.jpg",
        sourceUrl: "https://アキラ.site/",
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }
    })
}
handler.help = ["Script","sc","sourcecode"].map(a => a + ' *[get script here]*')
handler.tags = ["info","main"]
handler.command = ["Script","sc","sourcecode"]

module.exports = handler