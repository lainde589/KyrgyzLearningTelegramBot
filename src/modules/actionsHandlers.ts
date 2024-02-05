import { Context } from "telegraf";
import { alphabetDetailedText, alphabetText } from "../db/alphabet";


export function handleAlphabet(ctx: Context): void {
    ctx.reply(alphabetText, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'More', callback_data: 'alphabet_detailed' }]
            ]
        }
    });
}



export function handleAlphabetDetailed(ctx: Context): void {
    ctx.reply(alphabetDetailedText);
}