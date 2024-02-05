import { Context } from "telegraf";



export function handleStart(ctx: Context): void {
    ctx.reply(startCommandText, {
        reply_markup: {
            resize_keyboard: true,
            inline_keyboard: [
                [{ text: 'Alphabet 🔡', callback_data: 'alphabet' }],
                [{ text: 'Phonetics 🔊', callback_data: 'phonetics' }],
                [{ text: 'Grammar 📖', callback_data: 'grammar' }],
                [{ text: 'Vocabulary 📚', callback_data: 'vocab' }]
            ]
        }
    });
}



export function handleHelp(ctx: Context): void {
    ctx.reply(helpCommandText);
}



export function handleAuthor(ctx: Context): void {
    ctx.reply(authorCommandText);
}
