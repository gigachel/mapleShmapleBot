import dotenv from "dotenv";
import Fastify from "fastify";
import { Bot, webhookCallback, session, InlineKeyboard } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { wikiConvers, searchWikiWithVariants, wikiMenu } from "./commands/wiki.js";
import { citiesGameConvers } from "./city/cities.js";
import citiesDB from "./city/cities_db.js";

dotenv.config();

const bot = new Bot(process.env.TOKEN);

bot.use(session({ initial: () => ({}) }));
// bot.use(
//     session({
//         initial: () => {
//             return { wiki: {} };
//         },
//         getSessionKey: (ctx) => ctx.from?.id.toString(),
//         // storage: new MemorySessionStorage(),
//         storage: new FileAdapter({
//             dirName: "sessions",
//         }),
//         // type: "multi",
//         // custom: {
//         //     initial: () => ({ foo: "" }),
//         // },
//         // conversation: {}, // may be left empty
//     })
// );
bot.use(wikiMenu);
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
        // const cat = await (await fetch("https://aws.random.cat/meow")).json();
        const cat = await (await fetch("https://api.thecatapi.com/v1/images/search")).json();
        ctx.replyWithPhoto(cat.url);
    } catch (error) {
        console.log(error, "error");
        // throw new Error(error);
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
    // ctx.session.wiki["22"] = "22";
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

    // ctx.session.restCities = citiesDB;
    // ctx.session.wasCities = [];
    // return await ctx.conversation.enter("citiesGameConvers");
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
        const searchIndex = ctx.callbackQuery.data.replace("WIKI__", "");
        const search = ctx.session.wiki[searchIndex];

        const { message, messageOptions } = await searchWikiWithVariants(ctx, search);

        return ctx.reply(message, messageOptions);
    } else if (ctx.callbackQuery.data.startsWith("GAMES__")) {
        const gameName = ctx.callbackQuery.data.replace("GAMES__", "");

        if (gameName === "cities") {
            ctx.session.restCities = citiesDB;
            ctx.session.wasCities = [];

            await ctx.conversation.enter("citiesGameConvers");

            ctx.session.restCities = null;
            ctx.session.wasCities = null;
        }
    }

    // await ctx.answerCallbackQuery(); // remove loading animation
});

bot.on("message", (ctx) => {
    const user = ctx.update.message.from;
    return ctx.reply("Hello, " + user.first_name + "!");
});

bot.errorBoundary((err) => console.error("!!!!!!!!!!!!!!!!!11", err));

bot.catch((err) => console.error("errrrrrr@@@@@@@@@@@@@@@@@@@@@", err));

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
        command: "games",
        description: "мини-игры",
    },
    {
        command: "hotkeys",
        description: "список горячих клавиш",
    },
]);

// Run the server!
if (process.env.NODE_ENV === "production") {
    console.log("Run the server!");
    const botDomain = "https://persian-blue-rabbit-belt.cyclic.app";
    const botPath = Buffer.from(process.env.TOKEN.split(":")[1]).toString("base64");
    const port = process.env.PORT || 3000;
    const server = Fastify(); // { logger: true }

    fetch(`https://api.telegram.org/bot${process.env.TOKEN}/setWebhook?url=${botDomain}/${botPath}/`); // можно без await

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
