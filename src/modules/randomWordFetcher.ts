import { Context } from "telegraf";
import vocabulary from "../db/vocabulary";



export function handleWordCmd(ctx: Context): void {
    ctx.reply(fetchRandomWordData());
}




const baseURL: string = 'https://en.wiktionary.org/api/rest_v1/page/definition/';
const path: string = baseURL + getRandomValue();

function fetchRandomWordData(): any {
    fetch(path)
        .then(response => response.text)
        .then(text => {
            return text;
        })
        .catch(err => {
            return err;
        });
}

function getRandomValue(): string {
    return vocabulary[~~(Math.random() * vocabulary.length)];
}