import { Context } from "telegraf";
import { alphabetDetailedText, alphabetText, alphabetTutorialUrl } from "../../db/content/alphabet";
import { grammarSectionText, startCommandText } from "../../db/serviceMessages";



export function handleStartMenu(ctx: Context): void {
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



export function handleAlphabetSection(ctx: Context): void {
    ctx.editMessageText(alphabetText);
    ctx.reply(alphabetDetailedText, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Watch the tutorial', url: alphabetTutorialUrl }]
            ]
        }
    });
}



export function handleGrammarSection(ctx: Context): void {
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