import { InlineKeyboard } from "grammy";

export async function wikiConvers(conversation, ctx) {
    let message = "";
    let messageOptions = {};
    let search = ctx.match;
    const searchLimit = 5;

    if (!search || !search.trim()) {
        await ctx.reply("Напиши слово, которое надо найти");
        const { message } = await conversation.waitFor(":text");
        search = message.text;
    }

    // search = search.replace(" ", "_");

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
                        titles: firstMatch,
                    })
            )
        ).json();

        const page = Object.values(article.query.pages)[0];

        message = page.extract || "😵";

        if (articlesList[1].length) {
            let inlineKeyboard = new InlineKeyboard();
            articlesList[1].forEach((article) => {
                inlineKeyboard = inlineKeyboard.text(article, article + "111").row();
            });

            messageOptions.reply_markup = inlineKeyboard;
        }
    } else {
        message = "😵";
    }

    return ctx.reply(message, messageOptions);
    // return ctx.reply(page.extract + JSON.stringify(articlesList, null, 2) || "😵");

    // Markup.keyboard(["one", "two", "three", "four", "five", "six"], {
    //     columns: parseInt(ctx.match[1]),
    // })
}
