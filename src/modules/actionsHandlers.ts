import { Context } from "telegraf";
import { alphabetDetailedText, alphabetText } from "../db/alphabet";


export function handleStart(ctx: Context): void {
    ctx.editMessageText(startCommandText, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Alphabet 🔡', callback_data: 'alphabet' }],
                [{ text: 'Phonetics 🔊', callback_data: 'phonetics' }],
                [{ text: 'Grammar 📖', callback_data: 'grammar' }],
                [{ text: 'Vocabulary 📚', callback_data: 'vocab' }]
            ]
        }
    });
}



export function handleAlphabet(ctx: Context): void {
    ctx.editMessageText(alphabetText, {
        reply_markup: {
            inline_keyboard: [
                [{ text: '◀️', callback_data: 'start' }],
                [{ text: 'More', callback_data: 'alphabet_detailed' }]
            ]
        }
    });
}



export function handleAlphabetDetailed(ctx: Context): void {
    ctx.reply(alphabetDetailedText);
}