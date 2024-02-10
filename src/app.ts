import { Telegraf } from 'telegraf';
import commands from './modules/commandsCombiner';
import actions from './modules/actionsCombiner';

require('dotenv').config();
const bot: Telegraf = new Telegraf(process.env.BOT_TOKEN || '');



// ? are executed when a command is entered
bot.start(ctx => commands.handleStartCmd(ctx));
bot.help(ctx => commands.handleHelpCmd(ctx));
bot.command('author', ctx => commands.handleAuthorCmd(ctx));
bot.command('word', ctx => commands.handleWordCmd(ctx));


// ? are executed when a button in inline keyboard is pressed
bot.action('start', ctx => actions.handleStartMenu(ctx));
bot.action('alphabet', ctx => actions.handleAlphabetSection(ctx));

bot.action('grammar', ctx => actions.handleGrammarSection(ctx));
bot.action('pronouns', ctx => actions.handlePronounsSection(ctx));



//* dropPendingUpdates: true - bot won't reply after launching it if you write to it while it's off
bot.launch({dropPendingUpdates: true}).then(() => console.log(`Bot started`));