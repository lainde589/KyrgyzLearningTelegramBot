import { Context, Format } from "telegraf";
import { alphabetText } from "../db/alphabet";

export function handleAlphabet(ctx: Context): void {
    ctx.reply(alphabetText);
}