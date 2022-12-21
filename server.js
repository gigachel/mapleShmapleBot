import Fastify from "fastify";
import { Bot, webhookCallback } from "grammy";
import dotenv from "dotenv";

dotenv.config();

const port = 3000;
const server = Fastify(); // { logger: true }
const bot = new Bot(process.env.TOKEN);
const botPath = Buffer.from(process.env.TOKEN.split(":")[1]).toString("base64");

server.post(`/${botPath}/`, webhookCallback(bot, "fastify")); // bot listen path
server.get("/111", async (request, reply) => {
    return "world";
});

bot.command("hotkeys", (ctx) => {
    ctx.reply(
        "<b>F1</b> - помощь\n" +
            "<b>CTRL + A</b> - выделить все\n" +
            "<b>CTRL + X</b> - вырезать\n" +
            "<b>CTRL + C</b> - копировать\n" +
            "<b>CTRL + V</b> - вставить\n" +
            "<b>CTRL + Z</b> - отменить последнее действие\n" +
            "<b>CTRL + Y</b> - повторить последнее действие\n" +
            "<b>CTRL + S</b> - сохранить текущий документ, проект и т.п.\n" +
            "<b>CTRL + P</b> - окно печати на принтер\n" +
            "<b>ALT + TAB</b> - переключение между окнами\n" +
            "<b>ALT + F4</b> - закрыть окно\n" +
            "<b>F5</b> - обновить страницу в браузере",
        {
            parse_mode: "HTML",
        }
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

bot.command("wiki", async (ctx) => {
    const search = ctx.match;

    if (!search || !search.trim()) {
        return ctx.reply("После /wiki напиши слово, которое надо найти");
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

    return ctx.reply(page.extract || "😵");
    // Markup.keyboard(["one", "two", "three", "four", "five", "six"], {
    //     columns: parseInt(ctx.match[1]),
    // })
});

// bot.hears(/hello/i, (ctx) => {
//     ctx.scene.enter("CONTACT_DATA_WIZARD_SCENE_ID");
//     // Scenes.Stage.enter("CONTACT_DATA_WIZARD_SCENE_ID");
//     // return ctx.reply("Hello!");
// });
// // bot.hears(/hello/i, Scenes.Stage.enter("CONTACT_DATA_WIZARD_SCENE_ID"));

// bot.hears(/хочу есть/i, (ctx) => {
//     ctx.reply("Так иди и покушай!");
// });

// bot.on("sticker", (ctx) => {
//     ctx.reply("Прикольный стикер");
// });

// bot.on("edited_message", (ctx) => {
//     ctx.reply("Эээ, не меняй сообщения!!!");
// });

// bot.on("text", (ctx) => {
//     // console.log("[LOG] : ctx", ctx.update);
//     const user = ctx.update.message.from;
//     return ctx.reply("Hello, " + user.first_name + "!");
//     // return ctx.replyWithDice();
// });

bot.on("message", (ctx) => {
    const user = ctx.update.message.from;
    return ctx.reply("Hello, " + user.first_name + "!");
});

// bot.start(); // polling

// Run the server!
(async () => {
    // server.register(productRoutes, { prefix: "/api/products" });

    try {
        await server.listen({ port: port });
        console.log("Listening on port", port);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
})();

// async function closeGracefully(signal) {
//    console.log(`*^!@4=> Received signal to terminate: ${signal}`)

//    await fastify.close()
//    // await db.close() if we have a db connection in this app
//    // await other things we should cleanup nicely
//    process.kill(process.pid, signal);
// }
// process.once('SIGINT', closeGracefully)
// process.once('SIGTERM', closeGracefully)
