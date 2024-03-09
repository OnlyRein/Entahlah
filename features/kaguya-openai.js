const fetch = require('node-fetch');

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `;
  try {

    const response = await fetch(`https://nue-api.vercel.app/api/gpt?model=gpt-4&prompt=${text}`);
    const data = await response.json();

    console.log(data); // Optional: Log the data to the console

    // Extract specific information from the API response
    const hasil = data?.result?.gpt || 'Tidak ada hasil yang ditemukan';

    // Send the result back to WhatsApp
    await m.reply(hasil);
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['ai'];
handler.tags = ['ai'];
handler.command = /^(ai)$/i;

module.exports = handler;
