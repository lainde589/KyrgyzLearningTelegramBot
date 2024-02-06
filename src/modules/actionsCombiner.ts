import { handleStartMenu } from "./actionsHandlers/startMenuHandler";
import { handleAlphabetSection, handleGrammarSection } from "./actionsHandlers/startMenuHandler";

import { handlePronounsSection } from "./actionsHandlers/grammarSection/pronounsSectionHandler";



const actions = {
    handleStartMenu,
    handleAlphabetSection,
    handleGrammarSection,
    handlePronounsSection
}

export default actions;