/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

var handler = async (m, { conn }) => {
  const p = nomorown;
  let pp = await conn.profilePictureUrl(`${p}@s.whatsapp.net`, 'image').catch((_) => "https://telegra.ph/file/bca8e6858de47726ba23b.jpg");
  let owner = `wa.me/${p}`;
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; BANG SYAII\nNICKNAME:🔰 DEVELOPER\nORG: ${nameowner}\nTITLE:soft\nitem1.TEL;waid=${nomorown}:${nomorown}\nitem1.X-ABLabel:Contact Owner\nitem2.URL:https://wa.me/${nomorown}\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:wa.me/6283842839555\nitem3.X-ABLabel:Email\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nBDAY;value=19-01-2008\nEND:VCARD`;

  const sentMsg = await conn.sendMessage(m.chat, {
    contacts: {
      displayName: wm,
      contacts: [{ vcard }]
    },
    contextInfo: {
      externalAdReply: {
        title: `Focalorz (ver ${version})`,
        body: wm,
        thumbnailUrl: pp,
        sourceUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: fkontak });

  await conn.reply(m.chat,  "*❕ he is my owner, if you want to report a bug contact him*", sentMsg);
}

handler.help = ['owner', 'creator'].map(a => a + ' *[my developer]*');
handler.tags = ['info'];
handler.command = ['owner', 'creator'];
handler.limit = true;
module.exports = handler;