import { Context } from "telegraf";
import { alphabetDetailedText, alphabetText } from "../db/alphabet";
import { grammarSectionText, pronounsSectionText, startCommandText } from "../db/serviceMessages";



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
    ctx.editMessageText(alphabetText);
    ctx.reply(alphabetDetailedText, {
        reply_markup: {
            inline_keyboard: [[{ text: '◀️ Back', callback_data: 'start' }]]
        }
    });
}


export function handleGrammar(ctx: Context): void {
    ctx.editMessageText(grammarSectionText, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Pronouns', callback_data: 'pronouns' }],
                [{ text: 'Nouns', callback_data: 'nouns' }],
                [{ text: 'Adjectives', callback_data: 'adjectives' }],
                [{ text: 'Verbs', callback_data: 'verbs' }],
                [{ text: '◀️ Back', callback_data: 'start' }]
            ]
        }
    });
}


export function handlePronouns(ctx: Context): void {
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