import { Context } from "telegraf";
import { alphabetText } from "../db/alphabet";

export function handleAlphabet(ctx: Context): void {
    ctx.editMessageText("The Kyrgyz Alphabet\n\n" + alphabetText);
}