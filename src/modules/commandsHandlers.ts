import { Context, Format } from "telegraf";



export function handleStart(ctx: Context): void {
    const startCommandText: string = 
        'Hello, let\'s start your journey to learning the Kyrgyz language.' +
        '\nJust tap on one of the sections below, and go ahead!' +
        '\n\nTap /help to get full list of commands';
    
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
    const helpCommandText: string =
        Format.bold('What can you do?').text +
        '\n\n/start - start the tutorial again\n' +
        '/author - information about the author\n'
        
    ctx.reply(helpCommandText);
}



export function handleAuthor(ctx: Context): void {
    const authorCommandText: string =
        'If you have any questions or need assistance, as well as suggestions for developing the bot,\n' +
        'feel free to contact me on Telegram: @lainde_so2\n\n' +
        'Source code of the bot here: https://github.com/laindeso2/KyrgyzLearningTelegramBot';

    ctx.reply(authorCommandText);
}
