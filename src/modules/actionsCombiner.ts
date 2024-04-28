import { handleStartMenu } from "./actionsHandlers/startMenuHandler";
import { handleAlphabetSection, handleGrammarSection } from "./actionsHandlers/startMenuHandler";

import { handlePronounsSection } from "./actionsHandlers/grammarSection/pronounsSectionHandler";



// !!!!!!!!!!!!!!!!!!! FUNCTONS BELOW ARE TEMPORARY !!!!!!!!!!!!!!!
import { Context } from "telegraf";

function handlePhoneticsSection(ctx: Context): void {
    ctx.editMessageText('Under development. Please contact the author: @lainde_so2', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '◀️ Back', callback_data: 'start' }]
            ]
        }
    });
}
function handleVocabularySection(ctx: Context): void {
    ctx.editMessageText('Under development. Please contact the author: @lainde_so2', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '◀️ Back', callback_data: 'start' }]
            ]
        }
    });
}
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



const actions = {
    handleStartMenu,
    handleAlphabetSection,
    handleGrammarSection,
    handlePronounsSection,
    handlePhoneticsSection,
    handleVocabularySection
}

export default actions;