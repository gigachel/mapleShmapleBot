import Fastify from "fastify";
import { Telegraf } from "telegraf";

const bot = new Telegraf(token);
const app = Fastify();
const port = 8080;

const webhook = await bot.createWebhook({ domain: webhookDomain });

app.post(bot.secretPathComponent(), (req, rep) => webhook(req.raw, rep.raw));

bot.on("text", ctx => ctx.reply("Hello"));

fastify.get("/", async (request, reply) => {
    return "!";
});

app.listen({ port: port }).then(() => console.log("Listening on port", port));