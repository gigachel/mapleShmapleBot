import { Keyboard } from "grammy";

export async function gamesConvers(conversation, ctx) {
    const keyboard = new Keyboard().text("Города").oneTime().persistent().resized(); // .persistent()
    await ctx.reply("Выбери игру", {
        reply_markup: keyboard,
    });
    const { message } = await conversation.waitFor(":text");
    const gameName = message.text;

    if (gameName === "Города") {
        return ctx.reply("222222222", {
            reply_markup: { remove_keyboard: true },
        });
    }

    // return ctx.reply(message, messageOptions);
}
