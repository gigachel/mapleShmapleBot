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

// // Search with default options
// var results = miniSearch2.search('мали', { prefix: true, fuzzy: 0.4 })
// console.log(results)

// export search by query
export default function searchCapitals(query) {
  return miniSearch.search(query, { prefix: true, fuzzy: 0.4 });
}
