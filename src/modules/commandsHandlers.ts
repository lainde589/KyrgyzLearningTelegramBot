import { Context } from "telegraf";
import { startCommandText, helpCommandText, authorCommandText } from "../db/serviceMessages";



export function handleStartCmd(ctx: Context): void {
    ctx.reply(startCommandText, {
        reply_markup: {
            resize_keyboard: true,
            inline_keyboard: [
                [{ text: 'Alphabet 🔡', callback_data: 'alphabet' }],
                [{ text: 'Phonetics 🔊', callback_data: 'phonetics' }],
                [{ text: 'Grammar 📖', callback_data: 'grammar' }],
                [{ text: 'Vocabulary 📚', callback_data: 'vocabulary' }]
            ]
        }
    });
}



export function handleHelpCmd(ctx: Context): void {
    ctx.reply(helpCommandText);
}



export function handleAuthorCmd(ctx: Context): void {
    ctx.reply(authorCommandText);
}
