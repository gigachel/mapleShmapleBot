import { PrismaClient } from "@prisma/client";
import { Bot, session, InlineKeyboard } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { wikiConvers, searchWikiWithVariants, wikiMenu } from "./commands/wiki.js";
import { citiesGameConvers } from "./city/cities.js";
import citiesDB from "./city/cities_db.js";
import { capitalsConvers, searchCapitals } from "./capitals/capitals.js";
import { dateLeftConvers } from "./commands/dateLeft.js";
import { getRandomTibetFox } from "./tibetFox/tibetFox.js";

const prisma = new PrismaClient();

export default function getBot() {
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
  bot.use(createConversation(capitalsConvers));
  bot.use(createConversation(dateLeftConvers));

  async function responseTime(ctx, next) {
    // take time before
    const before = Date.now(); // milliseconds

    ///////////
    console.log("[LOG] : responseTime : ctx:", ctx);
    const user = ctx.update.message?.from;

    if (user) {
      console.log("username: " + user.username);
      await prisma.user.upsert({
        where: {
          tg_id: String(user.id),
        },
        update: {},
        create: {
          tg_id: String(user.id),
          name: user.username,
        },
      });
    }
    //////////////////////////

    // invoke downstream middleware
    await next(); // make sure to `await`!
    // take time after
    const after = Date.now(); // milliseconds
    // log difference
    console.log(`Response time: ${after - before} ms`);
  }

  bot.use(responseTime);

  bot.command("date_left", async (ctx) => {
    await ctx.conversation.enter("dateLeftConvers");
  });

  bot.command("hotkeys", (ctx) => {
    const hotkeyText =
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
      "<b>F5</b> - обновить страницу в браузере";

    ctx.reply(hotkeyText, { parse_mode: "HTML" });
  });

  // https://mathematics-repetition.com/algebra/  ² ³
  bot.command("formulas", (ctx) => {
    const formales =
      "<b>(a+b)²=a²+2ab+b²</b> <i>Квадрат суммы двух выражений</i> равен квадрату первого выражения плюс удвоенное произведение первого выражения на второе плюс квадрат второго выражения.\n" +
      "<b>(a-b)²=a²-2ab+b²</b> <i>Квадрат разности двух выражений</i> равен квадрату первого выражения минус удвоенное произведение первого выражения на второе плюс квадрат второго выражения.\n" +
      "<b>a²-b²=(a-b)(a+b)</b> <i>Разность квадратов двух выражений</i> равна произведению разности самих выражений на их сумму.\n" +
      "<b>(a+b)³=a³+3a²b+3ab²+b³</b> <i>Куб суммы двух выражений</i> равен кубу первого выражения плюс утроенное произведение квадрата первого выражения на второе плюс утроенное произведение первого выражения на квадрат второго плюс куб второго выражения.\n" +
      "<b>(a-b)³= a³-3a²b+3ab²-b³</b> <i>Куб разности двух выражений</i> равен кубу первого выражения минус утроенное произведение квадрата первого выражения на второе плюс утроенное произведение первого выражения на квадрат второго минус куб второго выражения.\n" +
      "<b>a³+b³=(a+b)(a²-ab+b²)</b> <i>Сумма кубов двух выражений</i> равна произведению суммы самих выражений на неполный квадрат их разности.\n" +
      "<b>a³-b³=(a-b)(a²+ab+b²)</b> <i>Разность кубов двух выражений</i> равна произведению разности самих выражений на неполный квадрат их суммы.\n" +
      "<b>(a+b+c)²=a²+b²+c²+2ab+2ac+2bc</b> <i>Квадрат суммы трех выражений</i> равен сумме квадратов этих выражений плюс всевозможные удвоенные попарные произведения самих выражений.";
    // " Справка. Полный квадрат суммы двух выражений:   <b>a² + 2ab + b² </b>";

    ctx.reply(formales, { parse_mode: "HTML" });
  });

  bot.command("cat", async (ctx) => {
    try {
      // const cat = await (await fetch("https://aws.random.cat/meow")).json();
      const cat = await (await fetch("https://api.thecatapi.com/v1/images/search")).json();
      ctx.replyWithPhoto(cat[0]?.url);
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

  bot.command("tibet_fox", async (ctx) => {
    const foxImage = await getRandomTibetFox();
    ctx.replyWithPhoto(foxImage);
  });

  bot.command("wiki", async (ctx) => {
    // ctx.session.wiki["22"] = "22";
    await ctx.conversation.enter("wikiConvers");
  });

  // bot.command("games", async (ctx) => {
  //     await ctx.conversation.enter("gamesConvers");
  // });

  bot.command("games", async (ctx) => {
    // Название игры тут начинается на GAMES__, затем само название
    let inlineKeyboard = new InlineKeyboard().text("Города", "GAMES__cities");
    //.text("Столицы", "GAMES__capitals");

    return ctx.reply("Выбери игру", {
      reply_markup: inlineKeyboard,
    });

    // ctx.session.restCities = citiesDB;
    // ctx.session.wasCities = [];
    // return await ctx.conversation.enter("citiesGameConvers");
  });

  bot.command("capitals", async (ctx) => {
    await ctx.conversation.enter("capitalsConvers");
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

      // if (gameName === "capitals") {
      //   ctx.session.restCities = citiesDB;
      //   ctx.session.wasCities = [];

      //   await ctx.conversation.enter("citiesGameConvers");

      //   ctx.session.restCities = null;
      //   ctx.session.wasCities = null;
      // }
    }

    // await ctx.answerCallbackQuery(); // remove loading animation
  });

  bot.hears("users", async (ctx) => {
    const users = await prisma.user.findMany();
    return ctx.reply(users);
  });

  bot.hears(/столиц[аы] (.+)/i, (ctx) => {
    if (ctx.match[1]) {
      // const string = ctx.match[1].toLowerCase();

      // const capitalObj = capitalsDB.find((item) => {
      //   const countryAltArr = item.countryAlt ? item.countryAlt.toLowerCase().split(", ") : [];
      //   return item.country.toLowerCase() === string || item.capital.toLowerCase() === string || countryAltArr.includes(string);
      // });

      // // Точное совпадение
      // if (capitalObj) {
      //   const countryAlt = capitalObj.countryAlt ? ` (${capitalObj.countryAlt})` : "";
      //   ctx.reply(`<b>Страна</b>: ${capitalObj.country}${countryAlt}\n` + `<b>Столица</b>: ${capitalObj.capital}\n`, {
      //     parse_mode: "HTML",
      //   });
      // }
      // // Ищем неточное совпадение
      // else {
      //   const capitalsArr = searchCapitals(string);

      //   // Нашли несколько неточных совпадений
      //   if (capitalsArr.length) {
      //     let html = "Не нашлось точного совпадения страны или столицы <b>" + string + "</b> возможно вы искали\n\n";

      //     capitalsArr.length = 3;

      //     capitalsArr.forEach((capitalObj) => {
      //       const countryAlt = capitalObj.countryAlt ? ` (${capitalObj.countryAlt})` : "";
      //       html += `<b>Страна</b>: ${capitalObj.country}${countryAlt}\n` + `<b>Столица</b>: ${capitalObj.capital}\n\n`;
      //     });

      //     ctx.reply(html, { parse_mode: "HTML" });
      //   }
      //   // Не нашли даже неточные совпадения...
      //   else {
      //     ctx.reply("Не нашлось такой страны или столицы...");
      //   }
      // }

      const html = searchCapitals(ctx.match[1]);
      ctx.reply(html, { parse_mode: "HTML" });
    } else {
      ctx.reply("Напиши страну или столицу");
    }
  });

  bot.on("message", async (ctx) => {
    const user = ctx.update.message.from;

    return ctx.reply("Hello, " + user.first_name + "!");
    // return ctx.reply(ctx);
    // return ctx.reply(upsertUser);
  });

  bot.errorBoundary((err) => console.error("!!!!!!!!!!!!!!!!!11", err));

  bot.catch((err) => console.error("errrrrrr@@@@@@@@@@@@@@@@@@@@@", err));

  bot.api.setMyCommands([
    {
      command: "fox",
      description: "рандомная лиса",
    },
    {
      command: "tibet_fox",
      description: "рандомная тибетская лиса",
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
      command: "capitals",
      description: "страны и столицы",
    },
    {
      command: "formulas",
      description: "формулы сокращенного умножения",
    },
    {
      command: "date_left",
      description: "сколько осталось до даты",
    },
    {
      command: "hotkeys",
      description: "список горячих клавиш",
    },
  ]);

  return bot;
}
