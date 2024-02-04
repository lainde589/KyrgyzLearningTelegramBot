import { Telegraf, Context, session } from 'telegraf';
import sqlite from 'sqlite3';
import { getPhrase, addPhrase, deletePhrase } from './modules/phrasesHandler';


require('dotenv').config();
const bot: Telegraf = new Telegraf(process.env.BOT_TOKEN || '');




/*
    ? SQLite Database Setup
*/
const db: sqlite.Database = new sqlite.Database('kyrgyz_lexicon.db');
db.run('CREATE TABLE IF NOT EXISTS phrases (id INTEGER PRIMARY KEY AUTOINCREMENT, phrase TEXT, translation TEXT)');

bot.use(session());




bot.command('start', ctx => {
    ctx.reply('test');
});
bot.command('getphrase', async (ctx: Context) => getPhrase(ctx));

// !! COMMANDS BELOW CAN BE USED BY DEVELOPERS ONLY !!
bot.command('addphrase', async (ctx: Context) => addPhrase(ctx));
bot.command('dltphrase', async (ctx: Context) => deletePhrase(ctx));





//* dropPendingUpdates: true - bot won't reply if you write to it while it's off
bot.launch({dropPendingUpdates: true})
    .then(() => console.log(`Bot started (${new Date().toLocaleTimeString()})`));


export default db;