import { Telegraf } from 'telegraf';
import * as commands from './modules/commandsHandlers';
import * as actions from './modules/actionsHandlers';

require('dotenv').config();
const bot: Telegraf = new Telegraf(process.env.BOT_TOKEN || '');



// ? are executed when a command is entered
bot.start(ctx => commands.handleStart(ctx));
bot.help(ctx => commands.handleHelp(ctx));
bot.command('author', ctx => commands.handleAuthor(ctx));


// ? are executed when a button in inline keyboard is pressed
bot.action('start', ctx => actions.handleStart(ctx));
bot.action('alphabet', ctx => actions.handleAlphabet(ctx));

bot.action('grammar', ctx => actions.handleGrammar(ctx));
bot.action('pronouns', ctx => actions.handlePronouns(ctx));



//* dropPendingUpdates: true - bot won't reply after launching it if you write to it while it's off
bot.launch({dropPendingUpdates: true}).then(() => console.log(`Bot started`));