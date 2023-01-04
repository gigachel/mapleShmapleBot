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
    console.log(ctx.message?.text, "text");

    // const { message } = await conversation.waitFor(":text");

    // await citiesGame(conversation, ctx);
    // await conversation.external(() => citiesGame(conversation, ctx));

    do {
        await ctx.reply("Send me a photo!");
        ctx = await conversation.wait();
        console.log("[LOG] : citiesGameConvers : ctx.message?.text", ctx.message?.text);

        if (ctx.message?.text === "/cancel") {
            await ctx.reply("Cancelled, leaving!");
            return;
        }
    } while (!ctx.message?.photo);

    // do {
    //     // await ctx.reply("Send me a photo!");
    //     const ctx = await conversation.waitFor(":text");
    //     const cityName = ctx.message?.text;
    //     console.log("[LOG] : citiesGameConvers : cityName", cityName);

    //     if (!cityName) {
    //         await conversation.external(() => replayRandomCity(conversation, ctx));
    //     } else {
    //         // console.log("[LOG] : citiesGame : cityName", cityName);
    //         // await replayRandomCity(conversation, ctx, cityName[0]);
    //         // await conversation.external(() => replayRandomCity(conversation, ctx, cityName[0]));
    //         await ctx.reply("Cancelled, leaving!");
    //     }

    //     // if (!ctx.session.wasCities.length) {
    //     //     // await replayRandomCity(conversation, ctx);
    //     //     await conversation.external(() => replayRandomCity(conversation, ctx));
    //     //     // await citiesGame(conversation, ctx);
    //     //     // await conversation.external(() => citiesGame(conversation, ctx));
    //     //     // await conversation.waitFor(":text");
    //     // } else {
    //     //     // const { message } = await conversation.waitFor(":text");
    //     //     ctx = await conversation.waitFor(":text");
    //     //     const cityName = ctx.message.text;
    //     //     console.log("[LOG] : citiesGame : cityName", cityName);
    //     //     // await replayRandomCity(conversation, ctx, cityName[0]);
    //     //     await conversation.external(() => replayRandomCity(conversation, ctx, cityName[0]));
    //     //     // await citiesGame(conversation, ctx);
    //     //     // await conversation.external(() => citiesGame(conversation, ctx));
    //     // }

    //     if (ctx.message?.text === "/cancel") {
    //         await ctx.reply("Cancelled, leaving!");
    //         return;
    //     }
    // } while (1);

    // ctx = await conversation.wait();

    // if (!ctx.message?.photo) {
    //     ctx = await conversation.wait();
    // }

    console.log("222222222222222222222");

    ctx.session.restCities = [];
    ctx.session.wasCities = [];

    // return ctx.reply(message, messageOptions);
}

async function citiesGame(conversation, ctx) {
    console.log("[LOG] : citiesGame : ctx.session.wasCities.length", ctx.session.wasCities.length);

    do {
        if (!ctx.session.wasCities.length) {
            // await replayRandomCity(conversation, ctx);
            await conversation.external(() => replayRandomCity(conversation, ctx));
            // await citiesGame(conversation, ctx);
            // await conversation.external(() => citiesGame(conversation, ctx));
            // await conversation.waitFor(":text");
        } else {
            // const { message } = await conversation.waitFor(":text");
            ctx = await conversation.waitFor(":text");
            const cityName = ctx.message.text;
            console.log("[LOG] : citiesGame : cityName", cityName);
            // await replayRandomCity(conversation, ctx, cityName[0]);
            await conversation.external(() => replayRandomCity(conversation, ctx, cityName[0]));
            // await citiesGame(conversation, ctx);
            // await conversation.external(() => citiesGame(conversation, ctx));
        }
    } while (!ctx.message?.photo);

    console.log("END!!!!!!!!!!!!");
}

async function replayRandomCity(conversation, ctx, firstLetter) {
    let cityIndex;
    let cityName;

    if (firstLetter) {
        firstLetter = firstLetter.toUpperCase();
        const letterCities = ctx.session.restCities.filter((city) => city.name.startsWith(firstLetter));
        cityIndex = random(conversation, 0, letterCities.length);
        console.log("[LOG] : replayRandomCity : cityIndex", cityIndex);

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
        // return conversation.random();
        return Math.random();
    } else if (max === undefined) {
        max = min;
        min = 0;
    }

    min = Math.ceil(min);
    max = Math.floor(max);
    // return Math.floor(conversation.random() * (max - min + 1)) + min; // Максимум и минимум включаются
    return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}
