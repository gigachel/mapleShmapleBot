import Fastify from "fastify";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const port = 443;
const bot = new Telegraf(process.env.TOKEN);
const app = Fastify();
const webhookDomain = "maple-shmaple-bot.vercel.app";

const webhook = await bot.createWebhook({ domain: webhookDomain, port: port });

console.log("[LOG] : bot.secretPathComponent()", bot.secretPathComponent());
app.post('/'+bot.secretPathComponent(), (req, rep) => webhook(req.raw, rep.raw));
bot.on("text", ctx => ctx.reply("Hello"));

app.get("/", async (request, reply) => {
    return "!";
});

app.listen({ port: port }).then(() => console.log("Listening on port", port));