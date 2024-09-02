// Страница со сравнением альтернатив fuzzy поиска
// https://github.com/nextapps-de/flexsearch
// https://habr.com/ru/articles/784650/

import MiniSearch from "minisearch";
import capitalsDB from "./capitals_db.js";

var miniSearch = new MiniSearch({
  fields: ["country", "capital", "countryAlt"], // fields to index for full-text search
  storeFields: ["country", "capital", "countryAlt"], // fields to return with search results
});

// // Index all documents
miniSearch.addAll(capitalsDB);

export async function capitalsConvers(conversation, ctx) {
  let search = ctx.match;

  if (!search || !search.trim()) {
    await ctx.reply("Напиши название страны или столицы");
    const { message } = await conversation.waitFor(":text");
    search = message.text;
  }

  const html = searchCapitals(search);

  return await ctx.reply(html, { parse_mode: "HTML" });
}

export function searchCapitals(query) {
  const string = query.toLowerCase();

  // Точное совпадение
  let html = searchExact(query);

  // Ищем неточное совпадение
  if (!html) {
    // const capitalsArr = searchNonExact(string);
    html = searchNonExact(string);

    // // Нашли несколько неточных совпадений
    // if (capitalsArr.length) {
    //   html = "Не нашлось точного совпадения страны или столицы <b>" + string + "</b> возможно вы искали\n\n";

    //   capitalsArr.length = 3;

    //   capitalsArr.forEach((capitalObj) => {
    //     const countryAlt = capitalObj.countryAlt ? ` (${capitalObj.countryAlt})` : "";
    //     html += `<b>Страна</b>: ${capitalObj.country}${countryAlt}\n` + `<b>Столица</b>: ${capitalObj.capital}\n\n`;
    //   });
    // }

    // Не нашли даже неточные совпадения...
    if (!html) {
      html = "Не нашлось такой страны или столицы...";
    }
  }

  return html;
}

function searchExact(string) {
  const capitalObj = capitalsDB.find((item) => {
    const countryAltArr = item.countryAlt ? item.countryAlt.toLowerCase().split(", ") : [];
    return item.country.toLowerCase() === string || item.capital.toLowerCase() === string || countryAltArr.includes(string);
  });

  // Точное совпадение
  if (capitalObj) {
    const countryAlt = capitalObj.countryAlt ? ` (${capitalObj.countryAlt})` : "";
    return `<b>Страна</b>: ${capitalObj.country}${countryAlt}\n` + `<b>Столица</b>: ${capitalObj.capital}\n`;
  } else {
    return false;
  }
}

function searchNonExact(query) {
  const capitalsArr = miniSearch.search(query, { prefix: true, fuzzy: 0.4 });

  // Нашли несколько неточных совпадений
  if (capitalsArr.length) {
    let html = "Не нашлось точного совпадения страны или столицы <b>" + query + "</b> возможно вы искали\n\n";

    capitalsArr.length = 3;

    capitalsArr.forEach((capitalObj) => {
      const countryAlt = capitalObj.countryAlt ? ` (${capitalObj.countryAlt})` : "";
      html += `<b>Страна</b>: ${capitalObj.country}${countryAlt}\n` + `<b>Столица</b>: ${capitalObj.capital}\n\n`;
    });

    return html;
  } else {
    return false;
  }
}
