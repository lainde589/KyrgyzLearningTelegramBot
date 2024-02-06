import { Context } from "telegraf";
import { pronounsSectionText } from "../../../db/serviceMessages";

export function handlePronounsSection(ctx: Context): void {
    ctx.editMessageText(pronounsSectionText, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Personal', callback_data: 'personal_p' }],
                [{ text: 'Demonstrative', callback_data: 'demonstrative_p' }],
                [{ text: 'Interrogative', callback_data: 'interrogative_p' }],
                [{ text: 'Determinative', callback_data: 'determinative_p' }],
                [{ text: 'Indefinite', callback_data: 'indefinite_p' }],
                [{ text: 'Negative', callback_data: 'negative_p' }],
                [{ text: '◀️ Back', callback_data: 'grammar' }]
            ]
        }
    });
}