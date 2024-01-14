import { Telegraf } from 'telegraf';

const TOKEN: string = '6957524257:AAEOPA72r4h7SHEoAKQF-TI8HZCILYs1qsk';
const bot: Telegraf = new Telegraf(TOKEN);


bot.on('text', ctx => ctx.reply(ctx.message.text));



//* dropPendingUpdates: true - bot won't reply if you write to it while it's off
bot.launch({dropPendingUpdates: true});