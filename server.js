// import Fastify from "fastify";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

// const port = 3000;
const bot = new Telegraf(process.env.TOKEN);
// const app = Fastify();
const webhookDomain = "persian-blue-rabbit-belt.cyclic.app";

bot.command("commands", (ctx) => {
    ctx.replyWithHTML(
        "<b>CTRL + C</b> - копировать\n" +
            "<b>CTRL + V</b> - вставить\n" +
            "<b>CTRL + Z</b> - отменить\n" +
            "<b>ALT + F4</b> - закрыть окно\n" +
            "<b>F5</b> - обновить страницу в браузере"
    );
});

bot.command("cat", async (ctx) => {
    const cat = await (await fetch("https://aws.random.cat/meow")).json();
    ctx.replyWithPhoto(cat.file);
});

bot.command("dog", async (ctx) => {
    const dog = await (await fetch("https://random.dog/woof.json")).json();
    ctx.replyWithPhoto(dog.url);
});

bot.command("fox", async (ctx) => {
    const fox = await (await fetch("https://randomfox.ca/floof/")).json();
    ctx.replyWithPhoto(fox.image);
});

bot.hears(/\/wiki (.+)/, async (ctx) => {
    const search = ctx.match[1];
    // "https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=" +
    const articlesList = await (
        await fetch(
            "https://ru.wikipedia.org/w/api.php?" +
                new URLSearchParams({
                    action: "opensearch",
                    limit: 5,
                    namespace: 0,
                    format: "json",
                    utf8: "",
                    search: search,
                })
        )
    ).json();

    const firstMatch = articlesList[1][0];

    const article = await (
        await fetch(
            "https://ru.wikipedia.org/w/api.php?" +
                new URLSearchParams({
                    action: "query",
                    prop: "extracts",
                    exintro: "",
                    explaintext: "",
                    utf8: "",
                    titles: firstMatch,
                })
        )
    ).json();

    const page = Object.values(article.query.pages)[0];

    return ctx.reply(page.extract);
    // Markup.keyboard(["one", "two", "three", "four", "five", "six"], {
    //     columns: parseInt(ctx.match[1]),
    // })
});

bot.hears(/hello/i, (ctx) => {
    return ctx.reply("Hello!");
});

bot.hears(/хочу есть/i, (ctx) => {
    ctx.reply("Так иди и покушай!");
});

bot.on("sticker", (ctx) => {
    ctx.reply("Прикольный стикер");
});

bot.on("edited_message", (ctx) => {
    ctx.reply("Эээ, не меняй сообщения!!!");
});

bot.on("text", (ctx) => {
    // console.log("[LOG] : ctx", ctx.update);
    const user = ctx.update.message.from;
    return ctx.reply("Hello, " + user.first_name + "!");
});

// const webhook = await bot.createWebhook({ domain: webhookDomain });

// console.log("[LOG] : bot.secretPathComponent()", bot.secretPathComponent());
// app.post('/'+bot.secretPathComponent(), (req, rep) => webhook(req.raw, rep.raw));

// app.get("/", async (request, reply) => {
//     return "!!";
// });

// app.listen({ port: port }).then(() => console.log("Listening on port", port));

bot.launch({
    webhook: {
        // Public domain for webhook; e.g.: example.com
        domain: webhookDomain,

        // Port to listen on; e.g.: 8080
        //   port: port,

        // Optional path to listen for.
        // `bot.secretPathComponent()` will be used by default
        //   hookPath: webhookPath,

        // Optional secret to be sent back in a header for security.
        // e.g.: `crypto.randomBytes(64).toString("hex")`
        //   secretToken: randomAlphaNumericString,
    },
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
