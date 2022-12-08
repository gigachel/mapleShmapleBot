import Fastify from "fastify";
import { Telegraf } from "telegraf";
import dotenv from "dotenv";

dotenv.config();

const port = 3000;
const bot = new Telegraf(process.env.TOKEN);
const app = Fastify();
const webhookDomain = "persian-blue-rabbit-belt.cyclic.app";

bot.on("text", ctx => ctx.reply("Hello"));

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