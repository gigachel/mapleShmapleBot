import { Keyboard } from "grammy";
import { getWikiExtract } from "../commands/wiki.js";

export async function citiesGameConvers(conversation, ctx) {
    conversation.log("enter city game conversation");

    await recur(conversation, ctx);

    console.log("leave city game conversation");
}

async function recur(conversation, ctx) {
    if (!ctx.session.wasCities.length) {
        await ctx.reply(
            "Правила:\nназываем город в России, название которого начинается на ту букву, которой оканчивается название предыдущего города"
        );
        await replyBotCityName(conversation, ctx);
    }

    const { message } = await conversation.waitFor(":text");
    const cityName = (message?.text || "").toLowerCase();

    ///cancel
    if (message?.text === "Выйти из игры") {
        await ctx.reply("Выход", {
            reply_markup: { remove_keyboard: true },
        });
        return;
    }

    // await conversation.external(() => replyRandomCity(conversation, ctx));
    // HACK: conversation.external not work
    if (!conversation._isReplaying) {
        if (await checkCityName(conversation, ctx, cityName)) {
            ctx.session.wasCities.push(cityName);
            const lastLetter = getLastLetter(cityName);

            const botResult = await replyBotCityName(conversation, ctx, lastLetter);

            if (!botResult) {
                await ctx.reply('Ура!!! Твоя победа! Я больше не знаю городов на "<b>' + lastLetter.toUpperCase() + '</b>"', {
                    remove_keyboard: true,
                });
                return;
            }
        }
    }

    return await recur(conversation, ctx);
}

async function checkCityName(conversation, ctx, cityName) {
    const findInWasCities = ctx.session.wasCities.find((city) => city === cityName);

    if (findInWasCities) {
        await ctx.reply("Такой город уже был! Вспоминай еще");
        return false;
    }

    if (ctx.session.botLastLetter !== cityName[0]) {
        await ctx.reply('Город не на ту букву! Тебе на "' + ctx.session.botLastLetter.toUpperCase() + '"');
        return false;
    }

    const findInRestCities = ctx.session.restCities.find((city) => city.name.toLowerCase() === cityName);

    if (!findInRestCities) {
        await ctx.reply("Такого города в России нет! Напряги мозги");
        return false;
    }

    return true;
}

function getLastLetter(cityName) {
    let index = 1;
    let lastLetter = cityName[cityName.length - 1];

    while (["ь", "й", " ", "-", "ы"].includes(lastLetter)) {
        lastLetter = cityName[cityName.length - index];
        index++;
    }

    if (lastLetter === "ё") {
        lastLetter = "е";
    }

    return lastLetter;
}

async function replyBotCityName(conversation, ctx, lastLetter) {
    let message;
    const botCity = await getRandomCity(conversation, ctx, lastLetter);

    const keyboard = new Keyboard().text("Выйти из игры").resized().oneTime();

    if (botCity) {
        message = "<b>" + botCity.name + "</b>";
        ctx.session.wasCities.push(botCity.name.toLowerCase());
        const botLastLetter = getLastLetter(botCity.name);
        ctx.session.botLastLetter = botLastLetter;

        const wikiExtract = await getWikiExtract(botCity.title);

        if (wikiExtract) {
            message += "\n\n" + wikiExtract;
        }

        message += '\n\nТебе на "<b>' + botLastLetter.toUpperCase() + '</b>"';

        await ctx.reply(message, { parse_mode: "HTML", reply_markup: keyboard });

        return true;
    } else {
        return false;
    }
}

async function getRandomCity(conversation, ctx, firstLetter) {
    let cityIndex;
    let city;

    if (firstLetter) {
        firstLetter = firstLetter.toUpperCase();
        const letterCities = ctx.session.restCities.filter((city) => city.name.startsWith(firstLetter));
        cityIndex = await random(conversation, 0, letterCities.length);
        // cityIndex = await conversation.external(() => random(conversation, 0, letterCities.length));

        city = letterCities[cityIndex];
        cityIndex = ctx.session.restCities.findIndex((ct) => ct.name === city.name);
        ctx.session.restCities.splice(cityIndex, 1);
    } else {
        cityIndex = await random(conversation, 0, ctx.session.restCities.length);
        // cityIndex = await conversation.external(() => random(conversation, 0, ctx.session.restCities.length));
        const cityArr = ctx.session.restCities.splice(cityIndex, 1);
        // const cityArr = await conversation.external(() => ctx.session.restCities.splice(cityIndex, 1));
        city = cityArr[0];
    }

    return city;
}

async function random(conversation, min, max) {
    const random = await conversation.random();
    // const random = Math.random();

    if (min === undefined && max === undefined) {
        return random;
    } else if (max === undefined) {
        max = min;
        min = 0;
    }

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(random * (max - min + 1)) + min; // Максимум и минимум включаются
}
