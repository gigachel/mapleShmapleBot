import Fastify from "fastify";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const port = 3000;
const bot = new Telegraf(process.env.TOKEN);
const app = Fastify();
const webhookDomain = "persian-blue-rabbit-belt.cyclic.app";

bot.command("commands", (ctx) => {
    ctx.replyWithHTML(`
        <b>CTRL + C</b> - копировать
        <b>CTRL + V</b> - вставить
        <b>CTRL + Z</b> - отменить
        <b>F5</b> - обновить страницу в браузере
        <b>ALT + F4</b> - закрыть окно
    `);
});

bot.hears("hello", (ctx) => {
    return ctx.reply("Hello!");
});

bot.hears("хочу есть", (ctx) => {
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
