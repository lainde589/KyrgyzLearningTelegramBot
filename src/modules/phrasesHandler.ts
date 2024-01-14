import { Context } from "telegraf";
import db from "../app";


interface PhraseRow {
    id: number;
    phrase: string;
    translation: string;
}



async function getPhrase(ctx: Context): Promise<void> {
    db.get('SELECT * FROM phrases ORDER BY RANDOM() LIMIT 1', (err, row: PhraseRow) => {
        if (row) {
            ctx.reply(`Phrase: ${row.phrase}\nTranslation: ${row.translation}`);
        } else {
            ctx.reply('No phrases available. Add some phrases using /addphrase command');
        }
    });
}




async function addPhrase(ctx: Context): Promise<void> {
    const msg = ctx.message;
    
    if (msg && 'text' in msg) {
        const { text } = msg;
        const [command, phrase, translation] = text.split(' ');

        if (phrase && translation) {
            db.run('INSERT INTO phrases (phrase, translation) VALUES (?, ?)', [phrase, translation], (err) => {
                if (err) {
                    ctx.reply('Error adding phrase');
                } else {
                    ctx.reply(`[${phrase}] added successfully`);
                }
            });
        } else {
            ctx.reply('Please provide a valid phrase and translation.');
        }
    }
}




async function deletePhrase(ctx: Context): Promise<void> {
    const msg = ctx.message;
    
    if (msg && 'text' in msg) {
        const { text } = msg;
        const [command, phraseToDelete] = text.split(' ');

        if (phraseToDelete) {
            db.run(`DELETE FROM phrases WHERE phrase = ?`, [phraseToDelete], (err) => {
                if (err) {
                    ctx.reply('Error deleting phrase ' + err.message);
                } else {
                    ctx.reply(`[${phraseToDelete}] deleted successfully`);
                }
            });
        } else {
            ctx.reply('Please provide a valid phrase');
        }
    }
}




export { getPhrase, addPhrase, deletePhrase }