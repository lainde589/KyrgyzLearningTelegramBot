import { Context, Format } from "telegraf";
import { alphabetText } from "../db/alphabet";

export function handleAlphabet(ctx: Context): void {
    ctx.reply(Format.bold("The Kyrgyz Alphabet\n\n") + alphabetText);
}