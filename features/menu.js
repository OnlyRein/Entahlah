let handler = async (m, { conn }) => {
  const Script =`*• Focalorz MENU :*\n• Ai\n• cai\n• sticker (.s)\n• yt downloader (ytmp3,ytmp4,play)\n• tiktok downloader\n`
  
  conn.reply(m.chat, Script, m, {
      })
  }
  handler.help = ["Menu","help","allmenu"]
  handler.tags = ["info","main"]
  handler.command = ["menu","help","allmenu"]
  
  module.exports = handler