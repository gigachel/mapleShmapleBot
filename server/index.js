import dotenv from "dotenv";
import Fastify from "fastify";
import { Bot, webhookCallback, session, InlineKeyboard } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { wikiConvers, searchWikiWithVariants } from "./commands/wiki.js";
import { citiesGameConvers } from "./city/cities.js";

dotenv.config();

const bot = new Bot(process.env.TOKEN);
const botPath = Buffer.from(process.env.TOKEN.split(":")[1]).toString("base64");

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());
bot.use(createConversation(wikiConvers));
bot.use(createConversation(citiesGameConvers));

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

// bot.command("games", async (ctx) => {
//     await ctx.conversation.enter("gamesConvers");
// });

bot.command("games", async (ctx) => {
    let inlineKeyboard = new InlineKeyboard().text("Города", "GAMES__cities");

    return ctx.reply("Выбери игру", {
        reply_markup: inlineKeyboard,
    });
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

bot.on("callback_query:data", async (ctx) => {
    if (ctx.callbackQuery.data.startsWith("WIKI__")) {
        const search = ctx.callbackQuery.data.replace("WIKI__", "");

        const { message, messageOptions } = await searchWikiWithVariants(search);

        return ctx.reply(message, messageOptions);
    } else if (ctx.callbackQuery.data.startsWith("GAMES__")) {
        const gameName = ctx.callbackQuery.data.replace("GAMES__", "");

        if (gameName === "cities") {
            await ctx.conversation.enter("citiesGameConvers");
        }
    }

    // await ctx.answerCallbackQuery(); // remove loading animation
});

bot.on("message", (ctx) => {
    const user = ctx.update.message.from;
    return ctx.reply("Hello, " + user.first_name + "!");
});

bot.api.setMyCommands([
    {
        command: "fox",
        description: "рандомная лиса",
    },
    {
        command: "cat",
        description: "рандомная кошка",
    },
    {
        command: "dog",
        description: "рандомная собака",
    },
    {
        command: "wiki",
        description: "+слово - поиск слова в википедии",
    },
    {
        command: "hotkeys",
        description: "список горячих клавиш",
    },
    // {
    //     command: "games",
    //     description: "игры",
    // },
]);

// Run the server!
if (process.env.NODE_ENV === "production") {
    console.log("Run the server!");
    const port = process.env.PORT || 3000;
    const server = Fastify(); // { logger: true }

    server.post(`/${botPath}/`, webhookCallback(bot, "fastify")); // bot listen path
    server.get("/111", async (request, reply) => {
        return "world";
    });

    server.setErrorHandler(function (error, request, reply) {
        console.log("[LOG] : error-------------", error);
        // if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
        //     // Log error
        //     this.log.error(error);
        //     // Send error response
        //     reply.status(500).send({ ok: false });
        // }
    });

    (async () => {
        // server.register(productRoutes, { prefix: "/api/products" });

        try {
            await server.listen({ port });
            console.log("Listening on port", port);
        } catch (err) {
            console.log(err, "errrrrrrrrrrrrr");
            server.log.error(err);
            process.exit(1);
        }
    })();
} else {
    console.log("Use Long Polling!");
    bot.start(); // Use Long Polling for development
}

async function closeGracefully(signal) {
    console.log(`*^!@4=> Received signal to terminate: ${signal}`);

    //    await fastify.close()
    //    // await db.close() if we have a db connection in this app
    //    // await other things we should cleanup nicely
    //    process.kill(process.pid, signal);
}
process.once("SIGINT", closeGracefully);
process.once("SIGTERM", closeGracefully);
