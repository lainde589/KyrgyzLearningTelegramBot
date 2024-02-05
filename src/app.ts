import { Telegraf } from 'telegraf';
import * as commands from './modules/commandsHandlers';
import * as actions from './modules/actionsHandlers';

require('dotenv').config();
const bot: Telegraf = new Telegraf(process.env.BOT_TOKEN || '');



bot.command('start', ctx => commands.handleStart(ctx));
bot.command('help', ctx => commands.handleHelp(ctx));
bot.command('author', ctx => commands.handleAuthor(ctx));


bot.action('alphabet',  (ctx) => actions.handleAlphabet(ctx))




//* dropPendingUpdates: true - bot won't reply after launching it if you write to it while it's off
bot.launch({dropPendingUpdates: true}).then(() => console.log(`Bot started`));