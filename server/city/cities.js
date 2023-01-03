import citiesDB from "./cities_db.js";

export async function citiesGameConvers(conversation, ctx) {
    // const keyboard = new InlineKeyboard().text("Города", "GAMES__cities");
    // await ctx.reply("Выбери игру", {
    //     reply_markup: keyboard,
    // });

    // await ctx.reply("Выбери игру");

    ctx.session.restCities = citiesDB;
    ctx.session.wasCities = [];

    console.log("111111111111111111111111");

    // await citiesGame(conversation, ctx);
    await conversation.external(() => citiesGame(conversation, ctx));

    console.log("222222222222222222222");

    ctx.session.restCities = [];
    ctx.session.wasCities = [];

    // return ctx.reply(message, messageOptions);
}

async function citiesGame(conversation, ctx) {
    console.log("[LOG] : citiesGame : ctx.session.wasCities.length", ctx.session.wasCities.length);

    if (!ctx.session.wasCities.length) {
        await replayRandomCity(conversation, ctx);
        // await conversation.external(() => replayRandomCity(conversation, ctx));
        await citiesGame(conversation, ctx);
        // await conversation.external(() => citiesGame(conversation, ctx));
    } else {
        const { message } = await conversation.waitFor(":text");
        const cityName = message.text;
        await replayRandomCity(conversation, ctx, cityName[0]);
        await citiesGame(conversation, ctx);
    }
}

async function replayRandomCity(conversation, ctx, firstLetter) {
    let cityIndex;
    let cityName;

    if (firstLetter) {
        const letterCities = ctx.session.restCities.filter((city) => city.name.startsWith(firstLetter));
        cityIndex = random(conversation, 0, letterCities.length);

        cityName = letterCities[cityIndex].name;
        console.log("[LOG] : replayRandomCity : cityName", cityName);
        cityIndex = ctx.session.restCities.findIndex((city) => city.name === cityName);
        ctx.session.restCities.splice(cityIndex, 1);
    } else {
        cityIndex = random(conversation, 0, ctx.session.restCities.length);
        const cityArr = ctx.session.restCities.splice(cityIndex, 1);
        cityName = cityArr[0].name;
    }

    ctx.session.wasCities.push(cityName);
    console.log("[LOG] : replayRandomCity : ctx.session.wasCities", ctx.session.wasCities);

    return await ctx.reply(cityName);
}

function random(conversation, min, max) {
    if (min === undefined && max === undefined) {
        return conversation.random();
    } else if (max === undefined) {
        max = min;
        min = 0;
    }

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(conversation.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}
