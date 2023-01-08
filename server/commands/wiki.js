import { InlineKeyboard } from "grammy";
import { Menu, MenuRange } from "@grammyjs/menu";

const searchLimit = 5;
export const wikiMenuSession = {}; // TODO: inline keyboard with hash for each button (life time)

// let range = new MenuRange();
// let range = () => {};
export const wikiMenu = new Menu("dynamic");
wikiMenu.dynamic(createDishMenu);

function createDishMenu(ctx, range) {
    for (let articleTitle of wikiMenuSession[ctx.from?.id.toString()].items) {
        range
            .text(articleTitle, async (ctx) => {
                const { message, messageOptions } = await searchWikiWithVariants(ctx, articleTitle);

                return await ctx.reply(message, messageOptions);
            })
            .row();
    }
}

export async function wikiConvers(conversation, ctx) {
    let search = ctx.match;

    if (!search || !search.trim()) {
        await ctx.reply("Напиши слово, которое надо найти");
        const { message } = await conversation.waitFor(":text");
        search = message.text;
    }

    // search = search.replace(" ", "_");

    const { message, messageOptions } = await searchWikiWithVariants(ctx, search);

    return await ctx.reply(message, messageOptions);
}

export async function searchWikiWithVariants(ctx, search) {
    let message = "";
    let messageOptions = {};

    // "https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=" +
    const articlesList = await (
        await fetch(
            "https://ru.wikipedia.org/w/api.php?" +
                new URLSearchParams({
                    action: "opensearch",
                    limit: searchLimit,
                    namespace: 0,
                    redirects: "resolve",
                    format: "json",
                    utf8: "",
                    search: search,
                })
        )
    ).json();

    if (articlesList[1] && articlesList[1].length) {
        const firstMatch = articlesList[1].shift();
        // firstMatch = firstMatch.replace(" ", "_");

        message = (await getWikiExtract(firstMatch)) || "😵";

        if (articlesList[1].length) {
            // let inlineKeyboard = new InlineKeyboard();

            if (!wikiMenuSession[ctx.from?.id.toString()]) {
                wikiMenuSession[ctx.from?.id.toString()] = {};
            }
            wikiMenuSession[ctx.from?.id.toString()].items = articlesList[1];

            messageOptions.reply_markup = wikiMenu;

            message += "\n\n" + "Похожие:";
        }
    } else {
        message = "😵";
    }

    return { message, messageOptions };
    // return ctx.reply(page.extract + JSON.stringify(articlesList, null, 2) || "😵");
}

export async function getWikiExtract(title) {
    const article = await (
        await fetch(
            "https://ru.wikipedia.org/w/api.php?" +
                new URLSearchParams({
                    action: "query",
                    prop: "extracts",
                    exintro: "",
                    explaintext: "",
                    format: "json",
                    utf8: "",
                    titles: title,
                })
        )
    ).json();

    const page = Object.values(article.query.pages)[0];

    return page.extract;
}
