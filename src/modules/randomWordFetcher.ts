import { Context } from "telegraf";
import vocabulary from "../db/vocabulary";



export function handleWordCmd(ctx: Context): void {
    ctx.reply(fetchRandomWordData());
}




function fetchRandomWordData(): string {
    const [ word, translation, transcription, typeOfSpeech ] = getRandomValue();
    const randomWordMessageTemplate: string = 
    `
📍 ${word} [${transcription}] ${typeOfSpeech}.

${translation}
    `;
    
    return randomWordMessageTemplate;
}

function getRandomValue() {
    return vocabulary[~~(Math.random() * vocabulary.length)];
}