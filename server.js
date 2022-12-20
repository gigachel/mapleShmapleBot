// import Fastify from "fastify";
import { Telegraf, Scenes } from "telegraf";
import { session } from "telegraf/session";
import dotenv from "dotenv";

dotenv.config();

// const port = 3000;
const bot = new Telegraf(process.env.TOKEN);
// const app = Fastify();
const webhookDomain = "persian-blue-rabbit-belt.cyclic.app";

const contactDataWizard = new Scenes.WizardScene(
    "CONTACT_DATA_WIZARD_SCENE_ID", // first argument is Scene_ID, same as for BaseScene
    (ctx) => {
        ctx.reply("What is your name?");
        ctx.wizard.state.contactData = {};
        return ctx.wizard.next();
    },
    (ctx) => {
        // validation example
        if (ctx.message.text.length < 2) {
            ctx.reply("Please enter name for real");
            return;
        }
        ctx.wizard.state.contactData.fio = ctx.message.text;
        ctx.reply("Enter your e-mail");
        return ctx.wizard.next();
    },
    async (ctx) => {
        ctx.wizard.state.contactData.email = ctx.message.text;
        ctx.reply("Thank you for your replies, we'll contact your soon\n" + JSON.stringify(ctx.wizard.state));
        // await mySendContactDataMomentBeforeErase(ctx.wizard.state.contactData);
        return ctx.scene.leave();
    }
);

const stage = new Scenes.Stage([contactDataWizard]);
bot.use(session());
bot.use(stage.middleware());

bot.command("hotkeys", (ctx) => {
    ctx.replyWithHTML(
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

bot.hears(/\/wiki(.*)/, async (ctx) => {
    const search = ctx.match[1];

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
//     // ctx.scene.enter("CONTACT_DATA_WIZARD_SCENE_ID");
//     Scenes.Stage.enter("CONTACT_DATA_WIZARD_SCENE_ID");
//     // return ctx.reply("Hello!");
// });
bot.hears(/hello/i, Scenes.Stage.enter("CONTACT_DATA_WIZARD_SCENE_ID"));

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
