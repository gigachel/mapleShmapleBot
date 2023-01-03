import citiesDB from "./cities_db.js";

export async function citiesGameConvers(conversation, ctx) {
    // const keyboard = new InlineKeyboard().text("Города", "GAMES__cities");
    // await ctx.reply("Выбери игру", {
    //     reply_markup: keyboard,
    // });

    // await ctx.reply("Выбери игру");

    ctx.session.restCities = citiesDB;
    ctx.session.wasCities = [];

    await citiesGame(conversation, ctx);

    ctx.session.restCities = [];
    ctx.session.wasCities = [];

    // return ctx.reply(message, messageOptions);
}

async function citiesGame(conversation, ctx) {
    const { message } = await conversation.waitFor(":text");
    const cityName = message.text;

    if (cityName === "1") {
        await ctx.reply("ещё");
        await citiesGame(conversation, ctx);
    } else {
        return;
    }
}
