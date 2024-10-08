import dotenv from "dotenv";
import { webhookCallback } from "grammy";
import { createServer, runServer } from "./server.js";
import getBot from "./bot.js";

dotenv.config();

let server;
const bot = getBot();

if (process.env.NODE_ENV === "production") {
  // Run the server!
  (async () => {
    // const botDomain = "https://persian-blue-rabbit-belt.cyclic.app";
    const botDomain = "https://komimall.ru:8443";
    const botPath = Buffer.from(process.env.TOKEN.split(":")[1]).toString("base64");

    try {
      const webhookInfo = await (await fetch(`https://api.telegram.org/bot${process.env.TOKEN}/getWebhookInfo`)).json();

      if (webhookInfo?.result?.url !== `${botDomain}/${botPath}/`) {
        throw "need setWebhook";
      }
    } catch (error) {
      console.log(error, "error");
      const setInfo = await fetch(`https://api.telegram.org/bot${process.env.TOKEN}/setWebhook?url=${botDomain}/${botPath}/`); // можно без await
      console.log("[LOG] : setInfo:", await setInfo.json());
    }

    server = createServer();

    server.post(`/${botPath}/`, webhookCallback(bot, "fastify")); // bot listen path

    await runServer();
  })();
} else {
  console.log("Use Long Polling!");
  bot.start(); // Use Long Polling for development
}

async function closeGracefully(signal) {
  console.log(`*^!@4=> Received signal to terminate: ${signal}`);

  await server.close();
  //    // await db.close() if we have a db connection in this app
  //    // await other things we should cleanup nicely
  process.kill(process.pid, signal);
}
process.once("SIGINT", closeGracefully);
process.once("SIGTERM", closeGracefully);
