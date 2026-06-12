const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Token akan diambil dari sistem Render nantinya
const token = process.env.TELEGRAM_TOKEN; 
const bot = new TelegramBot(token, {polling: true});

app.use(express.static('public'));

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Selamat datang di TeleSquad! Klik tombol di bawah untuk buka Skuad.", {
    reply_markup: {
      inline_keyboard: [[{ text: "Buka Skuad", web_app: { url: "[https://tele-squad-fpl.vercel.app](https://tele-squad-fpl.vercel.app)" } }]] } }]]
    }
  });
});

app.listen(port, () => console.log(`Server berjalan di port ${port}`));
