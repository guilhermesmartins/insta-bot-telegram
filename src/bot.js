require('dotenv').config();
const Telegraf = require('telegraf');
console.log(process.env.BOT_TOKEN);
const bot = new Telegraf(process.env.BOT_TOKEN);
const Text = require('./Text');

bot.start(ctx => ctx.reply('🤪'));

bot.command('send', async ctx => {
    if(ctx.message.text === '/send') return ctx.reply('Siga a estrutura\n/send frase | autor');

    let [msg, author] = ctx.message.text.split('|');

    msg = msg.split('/send')[1];

    if(msg.trim().length > 250) return ctx.reply('Texto maior que 250 caracteres!');

    ctx.reply(`${msg}
    ${author}
    `);

    const text = new Text({
        author: author.trim(),
        text: msg,
    });

    await text.save();

    //api.post('/images');
});

module.exports = bot;