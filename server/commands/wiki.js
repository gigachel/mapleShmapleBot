export async function wikiConvers(conversation, ctx) {
    let search = ctx.match;

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
                    limit: 5,
                    namespace: 0,
                    redirects: "resolve",
                    format: "json",
                    utf8: "",
                    search: search,
                })
        )
    ).json();

    const firstMatch = articlesList[1][0];
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

    // return ctx.reply(page.extract || "😵");
    return ctx.reply(page.extract + JSON.stringify(articlesList, null, 2) || "😵");

    // Markup.keyboard(["one", "two", "three", "four", "five", "six"], {
    //     columns: parseInt(ctx.match[1]),
    // })
}
