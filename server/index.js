import dotenv from "dotenv";
import Fastify from "fastify";
import { Bot, webhookCallback, session } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { wikiConvers } from "./commands/wiki.js";

dotenv.config();

const port = 3000;
const server = Fastify(); // { logger: true }
const bot = new Bot(process.env.TOKEN);
const botPath = Buffer.from(process.env.TOKEN.split(":")[1]).toString("base64");

server.post(`/${botPath}/`, webhookCallback(bot, "fastify")); // bot listen path
server.get("/111", async (request, reply) => {
    return "world";
});

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());
bot.use(createConversation(wikiConvers));

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
    try {
        const cat = await (await fetch("https://aws.random.cat/meow")).json();
        ctx.replyWithPhoto(cat.file);
    } catch (error) {
        console.log(error, "error");
        throw new Error(error);
    }

    // const cat = await (await fetch("https://aws.random.cat/meow")).json();
    // ctx.replyWithPhoto(cat.file);
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
    await ctx.conversation.enter("wikiConvers");
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

server.setErrorHandler(function (error, request, reply) {
    console.log("[LOG] : error-------------", error);
    // if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
    //     // Log error
    //     this.log.error(error);
    //     // Send error response
    //     reply.status(500).send({ ok: false });
    // }
});

// Run the server!
(async () => {
    // server.register(productRoutes, { prefix: "/api/products" });

    try {
        await server.listen({ port: port });
        console.log("Listening on port", port);
    } catch (err) {
        console.log(err, "errrrrrrrrrrrrr");
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
