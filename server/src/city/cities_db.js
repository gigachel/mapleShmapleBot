// https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8

// [].reduce.call(
//     document.body.querySelectorAll("table.standard"),
//     (arr, table) => {
//         return arr.concat(
//             [].reduce.call(
//                 table.querySelectorAll("tbody tr"),
//                 (arr2, tr) => {
//                     return arr2.concat({
//                         name: tr.children[2].querySelector("a").textContent,
//                         title: tr.children[2].querySelector("a").title, // href
//                         url: tr.children[2].querySelector("a").href,
//                     });
//                 },
//                 []
//             )
//         );
//     },
//     []
// );

export default [
  {
    name: "Абаза",
    title: "Абаза (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%B1%D0%B0%D0%B7%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Абакан",
    title: "Абакан",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%B1%D0%B0%D0%BA%D0%B0%D0%BD",
  },
  {
    name: "Абдулино",
    title: "Абдулино",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%B1%D0%B4%D1%83%D0%BB%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Абинск",
    title: "Абинск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%B1%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Агидель",
    title: "Агидель (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%B3%D0%B8%D0%B4%D0%B5%D0%BB%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Агрыз",
    title: "Агрыз",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%B3%D1%80%D1%8B%D0%B7",
  },
  {
    name: "Адыгейск",
    title: "Адыгейск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%B4%D1%8B%D0%B3%D0%B5%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Азнакаево",
    title: "Азнакаево",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%B7%D0%BD%D0%B0%D0%BA%D0%B0%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Азов",
    title: "Азов",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%B7%D0%BE%D0%B2",
  },
  {
    name: "Ак-Довурак",
    title: "Ак-Довурак",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BA-%D0%94%D0%BE%D0%B2%D1%83%D1%80%D0%B0%D0%BA",
  },
  {
    name: "Аксай",
    title: "Аксай (Ростовская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%81%D0%B0%D0%B9_(%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Алагир",
    title: "Алагир",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B0%D0%B3%D0%B8%D1%80",
  },
  {
    name: "Алапаевск",
    title: "Алапаевск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B0%D0%BF%D0%B0%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Алатырь",
    title: "Алатырь",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B0%D1%82%D1%8B%D1%80%D1%8C",
  },
  {
    name: "Алдан",
    title: "Алдан (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B4%D0%B0%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Алейск",
    title: "Алейск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Александров",
    title: "Александров (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Александровск",
    title: "Александровск (Пермский край)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D0%BA_(%D0%9F%D0%B5%D1%80%D0%BC%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9)",
  },
  {
    name: "Александровск-Сахалинский",
    title: "Александровск-Сахалинский",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D0%BA-%D0%A1%D0%B0%D1%85%D0%B0%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Алексеевка",
    title: "Алексеевка (город, Белгородская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%BA%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,_%D0%91%D0%B5%D0%BB%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Алексин",
    title: "Алексин",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D0%BD",
  },
  {
    name: "Алзамай",
    title: "Алзамай",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B7%D0%B0%D0%BC%D0%B0%D0%B9",
  },
  {
    name: "Алупка",
    title: "Алупка",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%83%D0%BF%D0%BA%D0%B0",
  },
  {
    name: "Алушта",
    title: "Алушта",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%83%D1%88%D1%82%D0%B0",
  },
  {
    name: "Альметьевск",
    title: "Альметьевск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C%D0%BC%D0%B5%D1%82%D1%8C%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Амурск",
    title: "Амурск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BC%D1%83%D1%80%D1%81%D0%BA",
  },
  {
    name: "Анадырь",
    title: "Анадырь",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%B4%D1%8B%D1%80%D1%8C",
  },
  {
    name: "Анапа",
    title: "Анапа",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%BF%D0%B0",
  },
  {
    name: "Ангарск",
    title: "Ангарск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B3%D0%B0%D1%80%D1%81%D0%BA",
  },
  {
    name: "Андреаполь",
    title: "Андреаполь",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B0%D0%BF%D0%BE%D0%BB%D1%8C",
  },
  {
    name: "Анжеро-Судженск",
    title: "Анжеро-Судженск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B6%D0%B5%D1%80%D0%BE-%D0%A1%D1%83%D0%B4%D0%B6%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Анива",
    title: "Анива (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B8%D0%B2%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Апатиты",
    title: "Апатиты",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BF%D0%B0%D1%82%D0%B8%D1%82%D1%8B",
  },
  {
    name: "Апрелевка",
    title: "Апрелевка",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BF%D1%80%D0%B5%D0%BB%D0%B5%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Апшеронск",
    title: "Апшеронск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D0%BF%D1%88%D0%B5%D1%80%D0%BE%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Арамиль",
    title: "Арамиль",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%BC%D0%B8%D0%BB%D1%8C",
  },
  {
    name: "Аргун",
    title: "Аргун (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B3%D1%83%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Ардатов",
    title: "Ардатов (Мордовия)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B4%D0%B0%D1%82%D0%BE%D0%B2_(%D0%9C%D0%BE%D1%80%D0%B4%D0%BE%D0%B2%D0%B8%D1%8F)",
  },
  {
    name: "Ардон",
    title: "Ардон (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B4%D0%BE%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Арзамас",
    title: "Арзамас",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B7%D0%B0%D0%BC%D0%B0%D1%81",
  },
  {
    name: "Аркадак",
    title: "Аркадак",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%BA%D0%B0%D0%B4%D0%B0%D0%BA",
  },
  {
    name: "Армавир",
    title: "Армавир (Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%BC%D0%B0%D0%B2%D0%B8%D1%80_(%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Армянск",
    title: "Армянск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%BC%D1%8F%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Арсеньев",
    title: "Арсеньев (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D1%81%D0%B5%D0%BD%D1%8C%D0%B5%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Арск",
    title: "Арск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D1%81%D0%BA",
  },
  {
    name: "Артём",
    title: "Артём (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D1%82%D1%91%D0%BC_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Артёмовск",
    title: "Артёмовск (Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D1%82%D1%91%D0%BC%D0%BE%D0%B2%D1%81%D0%BA_(%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Артёмовский",
    title: "Артёмовский",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D1%82%D1%91%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Архангельск",
    title: "Архангельск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Асбест",
    title: "Асбест (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%81%D0%B1%D0%B5%D1%81%D1%82_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Асино",
    title: "Асино",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%81%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Астрахань",
    title: "Астрахань",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%8C",
  },
  {
    name: "Аткарск",
    title: "Аткарск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%82%D0%BA%D0%B0%D1%80%D1%81%D0%BA",
  },
  {
    name: "Ахтубинск",
    title: "Ахтубинск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%85%D1%82%D1%83%D0%B1%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Ачинск",
    title: "Ачинск",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%87%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Аша",
    title: "Аша",
    url: "https://ru.wikipedia.org/wiki/%D0%90%D1%88%D0%B0",
  },
  {
    name: "Бабаево",
    title: "Бабаево",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B1%D0%B0%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Бабушкин",
    title: "Бабушкин (Бурятия)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B1%D1%83%D1%88%D0%BA%D0%B8%D0%BD_(%D0%91%D1%83%D1%80%D1%8F%D1%82%D0%B8%D1%8F)",
  },
  {
    name: "Бавлы",
    title: "Бавлы",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B2%D0%BB%D1%8B",
  },
  {
    name: "Багратионовск",
    title: "Багратионовск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B3%D1%80%D0%B0%D1%82%D0%B8%D0%BE%D0%BD%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Байкальск",
    title: "Байкальск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Баймак",
    title: "Баймак",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B9%D0%BC%D0%B0%D0%BA",
  },
  {
    name: "Бакал",
    title: "Бакал",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB",
  },
  {
    name: "Баксан",
    title: "Баксан (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BA%D1%81%D0%B0%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Балабаново",
    title: "Балабаново",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B0%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Балаково",
    title: "Балаково",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B0%D0%BA%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Балахна",
    title: "Балахна",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B0%D1%85%D0%BD%D0%B0",
  },
  {
    name: "Балашиха",
    title: "Балашиха",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B0%D1%88%D0%B8%D1%85%D0%B0",
  },
  {
    name: "Балашов",
    title: "Балашов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B0%D1%88%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Балей",
    title: "Балей",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B5%D0%B9",
  },
  {
    name: "Балтийск",
    title: "Балтийск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D1%82%D0%B8%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Барабинск",
    title: "Барабинск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%80%D0%B0%D0%B1%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Барнаул",
    title: "Барнаул",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%80%D0%BD%D0%B0%D1%83%D0%BB",
  },
  {
    name: "Барыш",
    title: "Барыш (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%80%D1%8B%D1%88_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Батайск",
    title: "Батайск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%82%D0%B0%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Бахчисарай",
    title: "Бахчисарай",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D1%85%D1%87%D0%B8%D1%81%D0%B0%D1%80%D0%B0%D0%B9",
  },
  {
    name: "Бежецк",
    title: "Бежецк",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%B6%D0%B5%D1%86%D0%BA",
  },
  {
    name: "Белая Калитва",
    title: "Белая Калитва",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B0%D1%8F_%D0%9A%D0%B0%D0%BB%D0%B8%D1%82%D0%B2%D0%B0",
  },
  {
    name: "Белая Холуница",
    title: "Белая Холуница",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B0%D1%8F_%D0%A5%D0%BE%D0%BB%D1%83%D0%BD%D0%B8%D1%86%D0%B0",
  },
  {
    name: "Белгород",
    title: "Белгород",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B3%D0%BE%D1%80%D0%BE%D0%B4",
  },
  {
    name: "Белебей",
    title: "Белебей",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B5%D0%B1%D0%B5%D0%B9",
  },
  {
    name: "Белёв",
    title: "Белёв",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D1%91%D0%B2",
  },
  {
    name: "Белинский",
    title: "Белинский (Пензенская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_(%D0%9F%D0%B5%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Белово",
    title: "Белово",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Белогорск",
    title: "Белогорск (Амурская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%90%D0%BC%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Белогорск",
    title: "Белогорск (Крым)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%9A%D1%80%D1%8B%D0%BC)",
  },
  {
    name: "Белозерск",
    title: "Белозерск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%B7%D0%B5%D1%80%D1%81%D0%BA",
  },
  {
    name: "Белокуриха",
    title: "Белокуриха",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%BA%D1%83%D1%80%D0%B8%D1%85%D0%B0",
  },
  {
    name: "Беломорск",
    title: "Беломорск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%BC%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Белоозёрский",
    title: "Белоозёрский (Московская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%BE%D0%B7%D1%91%D1%80%D1%81%D0%BA%D0%B8%D0%B9_(%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Белорецк",
    title: "Белорецк",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D0%B5%D1%86%D0%BA",
  },
  {
    name: "Белореченск",
    title: "Белореченск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Белоусово",
    title: "Белоусово (Калужская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%83%D1%81%D0%BE%D0%B2%D0%BE_(%D0%9A%D0%B0%D0%BB%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Белоярский",
    title: "Белоярский (Ханты-Мансийский автономный округ)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9_(%D0%A5%D0%B0%D0%BD%D1%82%D1%8B-%D0%9C%D0%B0%D0%BD%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BA%D1%80%D1%83%D0%B3)",
  },
  {
    name: "Белый",
    title: "Белый (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D1%8B%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Бердск",
    title: "Бердск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%B4%D1%81%D0%BA",
  },
  {
    name: "Березники",
    title: "Березники",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%B5%D0%B7%D0%BD%D0%B8%D0%BA%D0%B8",
  },
  {
    name: "Берёзовский",
    title: "Берёзовский (Кемеровская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D1%91%D0%B7%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_(%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Берёзовский",
    title: "Берёзовский (Свердловская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D1%91%D0%B7%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_(%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Беслан",
    title: "Беслан",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%81%D0%BB%D0%B0%D0%BD",
  },
  {
    name: "Бийск",
    title: "Бийск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Бикин",
    title: "Бикин (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BA%D0%B8%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Билибино",
    title: "Билибино",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D0%BB%D0%B8%D0%B1%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Биробиджан",
    title: "Биробиджан",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%80%D0%BE%D0%B1%D0%B8%D0%B4%D0%B6%D0%B0%D0%BD",
  },
  {
    name: "Бирск",
    title: "Бирск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%80%D1%81%D0%BA",
  },
  {
    name: "Бирюсинск",
    title: "Бирюсинск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%80%D1%8E%D1%81%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Бирюч",
    title: "Бирюч (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%80%D1%8E%D1%87_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Благовещенск",
    title: "Благовещенск (Башкортостан)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D1%81%D0%BA_(%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD)",
  },
  {
    name: "Благовещенск",
    title: "Благовещенск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Благодарный",
    title: "Благодарный",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%B0%D0%B3%D0%BE%D0%B4%D0%B0%D1%80%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Бобров",
    title: "Бобров (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B1%D1%80%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Богданович",
    title: "Богданович (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%B4%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Богородицк",
    title: "Богородицк",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D0%BA",
  },
  {
    name: "Богородск",
    title: "Богородск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA",
  },
  {
    name: "Боготол",
    title: "Боготол (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D0%BE%D1%82%D0%BE%D0%BB_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Богучар",
    title: "Богучар",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B3%D1%83%D1%87%D0%B0%D1%80",
  },
  {
    name: "Бодайбо",
    title: "Бодайбо (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B4%D0%B0%D0%B9%D0%B1%D0%BE_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Бокситогорск",
    title: "Бокситогорск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BA%D1%81%D0%B8%D1%82%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Болгар",
    title: "Болгар",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D0%B3%D0%B0%D1%80",
  },
  {
    name: "Бологое",
    title: "Бологое",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D0%BE%D0%B3%D0%BE%D0%B5",
  },
  {
    name: "Болотное",
    title: "Болотное",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D0%BE%D1%82%D0%BD%D0%BE%D0%B5",
  },
  {
    name: "Болохово",
    title: "Болохово",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D0%BE%D1%85%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Болхов",
    title: "Болхов",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D1%85%D0%BE%D0%B2",
  },
  {
    name: "Большой Камень",
    title: "Большой Камень",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C",
  },
  {
    name: "Бор",
    title: "Бор (город, Нижегородская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,_%D0%9D%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Борзя",
    title: "Борзя",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%B7%D1%8F",
  },
  {
    name: "Борисоглебск",
    title: "Борисоглебск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BE%D0%B3%D0%BB%D0%B5%D0%B1%D1%81%D0%BA",
  },
  {
    name: "Боровичи",
    title: "Боровичи",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B2%D0%B8%D1%87%D0%B8",
  },
  {
    name: "Боровск",
    title: "Боровск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Бородино",
    title: "Бородино (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%BE_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Братск",
    title: "Братск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%82%D1%81%D0%BA",
  },
  {
    name: "Бронницы",
    title: "Бронницы",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%BE%D0%BD%D0%BD%D0%B8%D1%86%D1%8B",
  },
  {
    name: "Брянск",
    title: "Брянск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D1%8F%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Бугульма",
    title: "Бугульма",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D0%B3%D1%83%D0%BB%D1%8C%D0%BC%D0%B0",
  },
  {
    name: "Бугуруслан",
    title: "Бугуруслан",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D0%B3%D1%83%D1%80%D1%83%D1%81%D0%BB%D0%B0%D0%BD",
  },
  {
    name: "Будённовск",
    title: "Будённовск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D0%B4%D1%91%D0%BD%D0%BD%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Бузулук",
    title: "Бузулук",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D0%B7%D1%83%D0%BB%D1%83%D0%BA",
  },
  {
    name: "Буинск",
    title: "Буинск (Татарстан)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D0%B8%D0%BD%D1%81%D0%BA_(%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD)",
  },
  {
    name: "Буй",
    title: "Буй (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Буйнакск",
    title: "Буйнакск",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D0%B9%D0%BD%D0%B0%D0%BA%D1%81%D0%BA",
  },
  {
    name: "Бутурлиновка",
    title: "Бутурлиновка",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D1%83%D1%82%D1%83%D1%80%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Валдай",
    title: "Валдай",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D0%BB%D0%B4%D0%B0%D0%B9",
  },
  {
    name: "Валуйки",
    title: "Валуйки",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D0%BB%D1%83%D0%B9%D0%BA%D0%B8",
  },
  {
    name: "Велиж",
    title: "Велиж",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%B6",
  },
  {
    name: "Великие Луки",
    title: "Великие Луки",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B5_%D0%9B%D1%83%D0%BA%D0%B8",
  },
  {
    name: "Великий Новгород",
    title: "Великий Новгород",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4",
  },
  {
    name: "Великий Устюг",
    title: "Великий Устюг",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%A3%D1%81%D1%82%D1%8E%D0%B3",
  },
  {
    name: "Вельск",
    title: "Вельск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Венёв",
    title: "Венёв",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BD%D1%91%D0%B2",
  },
  {
    name: "Верещагино",
    title: "Верещагино",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D0%B5%D1%89%D0%B0%D0%B3%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Верея",
    title: "Верея",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D0%B5%D1%8F",
  },
  {
    name: "Верхнеуральск",
    title: "Верхнеуральск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BD%D0%B5%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Верхний Тагил",
    title: "Верхний Тагил",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B8%D0%BB",
  },
  {
    name: "Верхний Уфалей",
    title: "Верхний Уфалей",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BD%D0%B8%D0%B9_%D0%A3%D1%84%D0%B0%D0%BB%D0%B5%D0%B9",
  },
  {
    name: "Верхняя Пышма",
    title: "Верхняя Пышма",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BD%D1%8F%D1%8F_%D0%9F%D1%8B%D1%88%D0%BC%D0%B0",
  },
  {
    name: "Верхняя Салда",
    title: "Верхняя Салда",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BD%D1%8F%D1%8F_%D0%A1%D0%B0%D0%BB%D0%B4%D0%B0",
  },
  {
    name: "Верхняя Тура",
    title: "Верхняя Тура",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BD%D1%8F%D1%8F_%D0%A2%D1%83%D1%80%D0%B0",
  },
  {
    name: "Верхотурье",
    title: "Верхотурье",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BE%D1%82%D1%83%D1%80%D1%8C%D0%B5",
  },
  {
    name: "Верхоянск",
    title: "Верхоянск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BE%D1%8F%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Весьегонск",
    title: "Весьегонск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%81%D1%8C%D0%B5%D0%B3%D0%BE%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Ветлуга",
    title: "Ветлуга (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%82%D0%BB%D1%83%D0%B3%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Видное",
    title: "Видное",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%B4%D0%BD%D0%BE%D0%B5",
  },
  {
    name: "Вилюйск",
    title: "Вилюйск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%BB%D1%8E%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Вилючинск",
    title: "Вилючинск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%BB%D1%8E%D1%87%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Вихоревка",
    title: "Вихоревка",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%85%D0%BE%D1%80%D0%B5%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Вичуга",
    title: "Вичуга",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%87%D1%83%D0%B3%D0%B0",
  },
  {
    name: "Владивосток",
    title: "Владивосток",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D0%BA",
  },
  {
    name: "Владикавказ",
    title: "Владикавказ",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BA%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7",
  },
  {
    name: "Владимир",
    title: "Владимир (город, Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Волгоград",
    title: "Волгоград",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4",
  },
  {
    name: "Волгодонск",
    title: "Волгодонск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B4%D0%BE%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Волгореченск",
    title: "Волгореченск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Волжск",
    title: "Волжск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%B6%D1%81%D0%BA",
  },
  {
    name: "Волжский",
    title: "Волжский",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%B6%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Вологда",
    title: "Вологда",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%B3%D0%B4%D0%B0",
  },
  {
    name: "Володарск",
    title: "Володарск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%D1%80%D1%81%D0%BA",
  },
  {
    name: "Волоколамск",
    title: "Волоколамск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Волосово",
    title: "Волосово",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D0%BE%D1%81%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Волхов",
    title: "Волхов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D1%85%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Волчанск",
    title: "Волчанск (Свердловская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D1%81%D0%BA_(%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Вольск",
    title: "Вольск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Воркута",
    title: "Воркута",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BA%D1%83%D1%82%D0%B0",
  },
  {
    name: "Воронеж",
    title: "Воронеж",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
  },
  {
    name: "Ворсма",
    title: "Ворсма",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D1%81%D0%BC%D0%B0",
  },
  {
    name: "Воскресенск",
    title: "Воскресенск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%81%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Воткинск",
    title: "Воткинск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%82%D0%BA%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Всеволожск",
    title: "Всеволожск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%81%D0%B5%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D1%81%D0%BA",
  },
  {
    name: "Вуктыл",
    title: "Вуктыл",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%83%D0%BA%D1%82%D1%8B%D0%BB",
  },
  {
    name: "Выборг",
    title: "Выборг",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D0%B1%D0%BE%D1%80%D0%B3",
  },
  {
    name: "Выкса",
    title: "Выкса",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D0%BA%D1%81%D0%B0",
  },
  {
    name: "Высоковск",
    title: "Высоковск",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%81%D0%BE%D0%BA%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Высоцк",
    title: "Высоцк",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%81%D0%BE%D1%86%D0%BA",
  },
  {
    name: "Вытегра",
    title: "Вытегра",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%82%D0%B5%D0%B3%D1%80%D0%B0",
  },
  {
    name: "Вышний Волочёк",
    title: "Вышний Волочёк",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%88%D0%BD%D0%B8%D0%B9_%D0%92%D0%BE%D0%BB%D0%BE%D1%87%D1%91%D0%BA",
  },
  {
    name: "Вяземский",
    title: "Вяземский (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8F%D0%B7%D0%B5%D0%BC%D1%81%D0%BA%D0%B8%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Вязники",
    title: "Вязники",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8F%D0%B7%D0%BD%D0%B8%D0%BA%D0%B8",
  },
  {
    name: "Вязьма",
    title: "Вязьма",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8F%D0%B7%D1%8C%D0%BC%D0%B0",
  },
  {
    name: "Вятские Поляны",
    title: "Вятские Поляны",
    url: "https://ru.wikipedia.org/wiki/%D0%92%D1%8F%D1%82%D1%81%D0%BA%D0%B8%D0%B5_%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D1%8B",
  },
  {
    name: "Гаврилов Посад",
    title: "Гаврилов Посад",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D0%BE%D0%B2_%D0%9F%D0%BE%D1%81%D0%B0%D0%B4",
  },
  {
    name: "Гаврилов-Ям",
    title: "Гаврилов-Ям",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D0%BE%D0%B2-%D0%AF%D0%BC",
  },
  {
    name: "Гагарин",
    title: "Гагарин (Смоленская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD_(%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Гаджиево",
    title: "Гаджиево",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B4%D0%B6%D0%B8%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Гай",
    title: "Гай (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Галич",
    title: "Галич (Костромская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D0%BB%D0%B8%D1%87_(%D0%9A%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%BC%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Гатчина",
    title: "Гатчина",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%82%D1%87%D0%B8%D0%BD%D0%B0",
  },
  {
    name: "Гвардейск",
    title: "Гвардейск",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B2%D0%B0%D1%80%D0%B4%D0%B5%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Гдов",
    title: "Гдов",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B4%D0%BE%D0%B2",
  },
  {
    name: "Геленджик",
    title: "Геленджик",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BB%D0%B5%D0%BD%D0%B4%D0%B6%D0%B8%D0%BA",
  },
  {
    name: "Георгиевск",
    title: "Георгиевск",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Глазов",
    title: "Глазов",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BB%D0%B0%D0%B7%D0%BE%D0%B2",
  },
  {
    name: "Голицыно",
    title: "Голицыно",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%B8%D1%86%D1%8B%D0%BD%D0%BE",
  },
  {
    name: "Горбатов",
    title: "Горбатов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%B1%D0%B0%D1%82%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Горно-Алтайск",
    title: "Горно-Алтайск",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BD%D0%BE-%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Горнозаводск",
    title: "Горнозаводск (Пермский край)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BD%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA_(%D0%9F%D0%B5%D1%80%D0%BC%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9)",
  },
  {
    name: "Горняк",
    title: "Горняк (Алтайский край)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BD%D1%8F%D0%BA_(%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9)",
  },
  {
    name: "Городец",
    title: "Городец",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B5%D1%86",
  },
  {
    name: "Городище",
    title: "Городище (Пензенская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%89%D0%B5_(%D0%9F%D0%B5%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Городовиковск",
    title: "Городовиковск",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%D0%B8%D0%BA%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Гороховец",
    title: "Гороховец",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%BE%D1%85%D0%BE%D0%B2%D0%B5%D1%86",
  },
  {
    name: "Горячий Ключ",
    title: "Горячий Ключ",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D1%8F%D1%87%D0%B8%D0%B9_%D0%9A%D0%BB%D1%8E%D1%87",
  },
  {
    name: "Грайворон",
    title: "Грайворон",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%B9%D0%B2%D0%BE%D1%80%D0%BE%D0%BD",
  },
  {
    name: "Гремячинск",
    title: "Гремячинск",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B5%D0%BC%D1%8F%D1%87%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Грозный",
    title: "Грозный",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%BE%D0%B7%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Грязи",
    title: "Грязи",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D1%8F%D0%B7%D0%B8",
  },
  {
    name: "Грязовец",
    title: "Грязовец",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D1%8F%D0%B7%D0%BE%D0%B2%D0%B5%D1%86",
  },
  {
    name: "Губаха",
    title: "Губаха",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D0%B1%D0%B0%D1%85%D0%B0",
  },
  {
    name: "Губкин",
    title: "Губкин (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D0%B1%D0%BA%D0%B8%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Губкинский",
    title: "Губкинский",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D0%B1%D0%BA%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Гудермес",
    title: "Гудермес",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D0%B4%D0%B5%D1%80%D0%BC%D0%B5%D1%81",
  },
  {
    name: "Гуково",
    title: "Гуково (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D0%BA%D0%BE%D0%B2%D0%BE_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Гулькевичи",
    title: "Гулькевичи",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D0%BB%D1%8C%D0%BA%D0%B5%D0%B2%D0%B8%D1%87%D0%B8",
  },
  {
    name: "Гурьевск",
    title: "Гурьевск (Калининградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D1%80%D1%8C%D0%B5%D0%B2%D1%81%D0%BA_(%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Гурьевск",
    title: "Гурьевск (Кемеровская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D1%80%D1%8C%D0%B5%D0%B2%D1%81%D0%BA_(%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Гусев",
    title: "Гусев (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D1%81%D0%B5%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Гусиноозёрск",
    title: "Гусиноозёрск",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D1%81%D0%B8%D0%BD%D0%BE%D0%BE%D0%B7%D1%91%D1%80%D1%81%D0%BA",
  },
  {
    name: "Гусь-Хрустальный",
    title: "Гусь-Хрустальный",
    url: "https://ru.wikipedia.org/wiki/%D0%93%D1%83%D1%81%D1%8C-%D0%A5%D1%80%D1%83%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Давлеканово",
    title: "Давлеканово",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%B2%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Дагестанские Огни",
    title: "Дагестанские Огни",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%B3%D0%B5%D1%81%D1%82%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D0%9E%D0%B3%D0%BD%D0%B8",
  },
  {
    name: "Далматово",
    title: "Далматово",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BB%D0%BC%D0%B0%D1%82%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Дальнегорск",
    title: "Дальнегорск",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%B5%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Дальнереченск",
    title: "Дальнереченск",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%B5%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Данилов",
    title: "Данилов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Данков",
    title: "Данков",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2",
  },
  {
    name: "Дегтярск",
    title: "Дегтярск",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%B3%D1%82%D1%8F%D1%80%D1%81%D0%BA",
  },
  {
    name: "Дедовск",
    title: "Дедовск",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%B4%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Демидов",
    title: "Демидов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BC%D0%B8%D0%B4%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Дербент",
    title: "Дербент",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%80%D0%B1%D0%B5%D0%BD%D1%82",
  },
  {
    name: "Десногорск",
    title: "Десногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%81%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Джанкой",
    title: "Джанкой",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B6%D0%B0%D0%BD%D0%BA%D0%BE%D0%B9",
  },
  {
    name: "Дзержинск",
    title: "Дзержинск (Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B7%D0%B5%D1%80%D0%B6%D0%B8%D0%BD%D1%81%D0%BA_(%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Дзержинский",
    title: "Дзержинский (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B7%D0%B5%D1%80%D0%B6%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Дивногорск",
    title: "Дивногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Дигора",
    title: "Дигора",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B3%D0%BE%D1%80%D0%B0",
  },
  {
    name: "Димитровград",
    title: "Димитровград (Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D0%B3%D1%80%D0%B0%D0%B4_(%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Дмитриев",
    title: "Дмитриев (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B5%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Дмитров",
    title: "Дмитров",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2",
  },
  {
    name: "Дмитровск",
    title: "Дмитровск",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Дно",
    title: "Дно (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BD%D0%BE_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Добрянка",
    title: "Добрянка",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%B1%D1%80%D1%8F%D0%BD%D0%BA%D0%B0",
  },
  {
    name: "Долгопрудный",
    title: "Долгопрудный",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BB%D0%B3%D0%BE%D0%BF%D1%80%D1%83%D0%B4%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Долинск",
    title: "Долинск",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BB%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Домодедово",
    title: "Домодедово (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BC%D0%BE%D0%B4%D0%B5%D0%B4%D0%BE%D0%B2%D0%BE_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Донецк",
    title: "Донецк (Ростовская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_(%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Донской",
    title: "Донской (Тульская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D0%BD%D1%81%D0%BA%D0%BE%D0%B9_(%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Дорогобуж",
    title: "Дорогобуж",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D0%BE%D1%80%D0%BE%D0%B3%D0%BE%D0%B1%D1%83%D0%B6",
  },
  {
    name: "Дрезна",
    title: "Дрезна",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D1%80%D0%B5%D0%B7%D0%BD%D0%B0",
  },
  {
    name: "Дубна",
    title: "Дубна",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D1%83%D0%B1%D0%BD%D0%B0",
  },
  {
    name: "Дубовка",
    title: "Дубовка",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D1%83%D0%B1%D0%BE%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Дудинка",
    title: "Дудинка",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D1%83%D0%B4%D0%B8%D0%BD%D0%BA%D0%B0",
  },
  {
    name: "Духовщина",
    title: "Духовщина",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D1%83%D1%85%D0%BE%D0%B2%D1%89%D0%B8%D0%BD%D0%B0",
  },
  {
    name: "Дюртюли",
    title: "Дюртюли",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D1%8E%D1%80%D1%82%D1%8E%D0%BB%D0%B8",
  },
  {
    name: "Дятьково",
    title: "Дятьково",
    url: "https://ru.wikipedia.org/wiki/%D0%94%D1%8F%D1%82%D1%8C%D0%BA%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Евпатория",
    title: "Евпатория",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%B2%D0%BF%D0%B0%D1%82%D0%BE%D1%80%D0%B8%D1%8F",
  },
  {
    name: "Егорьевск",
    title: "Егорьевск",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%B3%D0%BE%D1%80%D1%8C%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Ейск",
    title: "Ейск",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Екатеринбург",
    title: "Екатеринбург",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
  },
  {
    name: "Елабуга",
    title: "Елабуга",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%BB%D0%B0%D0%B1%D1%83%D0%B3%D0%B0",
  },
  {
    name: "Елец",
    title: "Елец",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%BB%D0%B5%D1%86",
  },
  {
    name: "Елизово",
    title: "Елизово",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Ельня",
    title: "Ельня",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%BB%D1%8C%D0%BD%D1%8F",
  },
  {
    name: "Еманжелинск",
    title: "Еманжелинск",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%BC%D0%B0%D0%BD%D0%B6%D0%B5%D0%BB%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Емва",
    title: "Емва",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%BC%D0%B2%D0%B0",
  },
  {
    name: "Енисейск",
    title: "Енисейск",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D0%BD%D0%B8%D1%81%D0%B5%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Ермолино",
    title: "Ермолино (Калужская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D1%80%D0%BC%D0%BE%D0%BB%D0%B8%D0%BD%D0%BE_(%D0%9A%D0%B0%D0%BB%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Ершов",
    title: "Ершов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D1%80%D1%88%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Ессентуки",
    title: "Ессентуки",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D1%81%D1%81%D0%B5%D0%BD%D1%82%D1%83%D0%BA%D0%B8",
  },
  {
    name: "Ефремов",
    title: "Ефремов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%95%D1%84%D1%80%D0%B5%D0%BC%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Железноводск",
    title: "Железноводск",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA",
  },
  {
    name: "Железногорск",
    title: "Железногорск (Красноярский край)",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9)",
  },
  {
    name: "Железногорск",
    title: "Железногорск (Курская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%9A%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Железногорск-Илимский",
    title: "Железногорск-Илимский",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D0%B5%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA-%D0%98%D0%BB%D0%B8%D0%BC%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Жердевка",
    title: "Жердевка",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D0%B5%D1%80%D0%B4%D0%B5%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Жигулёвск",
    title: "Жигулёвск",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%B3%D1%83%D0%BB%D1%91%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Жиздра",
    title: "Жиздра (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%B7%D0%B4%D1%80%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Жирновск",
    title: "Жирновск",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D1%80%D0%BD%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Жуков",
    title: "Жуков (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D1%83%D0%BA%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Жуковка",
    title: "Жуковка (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Жуковский",
    title: "Жуковский (Московская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%96%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_(%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Завитинск",
    title: "Завитинск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B2%D0%B8%D1%82%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Заводоуковск",
    title: "Заводоуковск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B2%D0%BE%D0%B4%D0%BE%D1%83%D0%BA%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Заволжск",
    title: "Заволжск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B2%D0%BE%D0%BB%D0%B6%D1%81%D0%BA",
  },
  {
    name: "Заволжье",
    title: "Заволжье (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B2%D0%BE%D0%BB%D0%B6%D1%8C%D0%B5_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Задонск",
    title: "Задонск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B4%D0%BE%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Заинск",
    title: "Заинск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Закаменск",
    title: "Закаменск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Заозёрный",
    title: "Заозёрный",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BE%D0%B7%D1%91%D1%80%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Заозёрск",
    title: "Заозёрск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BE%D0%B7%D1%91%D1%80%D1%81%D0%BA",
  },
  {
    name: "Западная Двина",
    title: "Западная Двина (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BF%D0%B0%D0%B4%D0%BD%D0%B0%D1%8F_%D0%94%D0%B2%D0%B8%D0%BD%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Заполярный",
    title: "Заполярный",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BF%D0%BE%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Зарайск",
    title: "Зарайск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D1%80%D0%B0%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Заречный",
    title: "Заречный (Пензенская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D1%80%D0%B5%D1%87%D0%BD%D1%8B%D0%B9_(%D0%9F%D0%B5%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Заречный",
    title: "Заречный (Свердловская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D1%80%D0%B5%D1%87%D0%BD%D1%8B%D0%B9_(%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Заринск",
    title: "Заринск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D1%80%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Звенигово",
    title: "Звенигово",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D0%B5%D0%BD%D0%B8%D0%B3%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Звенигород",
    title: "Звенигород",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D0%B5%D0%BD%D0%B8%D0%B3%D0%BE%D1%80%D0%BE%D0%B4",
  },
  {
    name: "Зверево",
    title: "Зверево",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B2%D0%B5%D1%80%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Зеленогорск",
    title: "Зеленогорск (Красноярский край)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9)",
  },
  {
    name: "Зеленоградск",
    title: "Зеленоградск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA",
  },
  {
    name: "Зеленодольск",
    title: "Зеленодольск (Татарстан)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA_(%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD)",
  },
  {
    name: "Зеленокумск",
    title: "Зеленокумск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%BA%D1%83%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Зерноград",
    title: "Зерноград",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D0%B4",
  },
  {
    name: "Зея",
    title: "Зея (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D1%8F_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Зима",
    title: "Зима (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B8%D0%BC%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Златоуст",
    title: "Златоуст",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%BB%D0%B0%D1%82%D0%BE%D1%83%D1%81%D1%82",
  },
  {
    name: "Злынка",
    title: "Злынка",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%BB%D1%8B%D0%BD%D0%BA%D0%B0",
  },
  {
    name: "Змеиногорск",
    title: "Змеиногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%BC%D0%B5%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Знаменск",
    title: "Знаменск (Астраханская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA_(%D0%90%D1%81%D1%82%D1%80%D0%B0%D1%85%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Зубцов",
    title: "Зубцов",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D1%83%D0%B1%D1%86%D0%BE%D0%B2",
  },
  {
    name: "Зуевка",
    title: "Зуевка",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D1%83%D0%B5%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Ивангород",
    title: "Ивангород",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%B2%D0%B0%D0%BD%D0%B3%D0%BE%D1%80%D0%BE%D0%B4",
  },
  {
    name: "Иваново",
    title: "Иваново",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Ивантеевка",
    title: "Ивантеевка",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%B2%D0%B0%D0%BD%D1%82%D0%B5%D0%B5%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Ивдель",
    title: "Ивдель",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%B2%D0%B4%D0%B5%D0%BB%D1%8C",
  },
  {
    name: "Игарка",
    title: "Игарка",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%B3%D0%B0%D1%80%D0%BA%D0%B0",
  },
  {
    name: "Ижевск",
    title: "Ижевск",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%B6%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Избербаш",
    title: "Избербаш",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%B7%D0%B1%D0%B5%D1%80%D0%B1%D0%B0%D1%88",
  },
  {
    name: "Изобильный",
    title: "Изобильный",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%B7%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Иланский",
    title: "Иланский",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%BB%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Инза",
    title: "Инза",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B7%D0%B0",
  },
  {
    name: "Иннополис",
    title: "Иннополис",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%81",
  },
  {
    name: "Инсар",
    title: "Инсар (Мордовия)",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%81%D0%B0%D1%80_(%D0%9C%D0%BE%D1%80%D0%B4%D0%BE%D0%B2%D0%B8%D1%8F)",
  },
  {
    name: "Инта",
    title: "Инта",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B0",
  },
  {
    name: "Ипатово",
    title: "Ипатово",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%BF%D0%B0%D1%82%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Ирбит",
    title: "Ирбит",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D1%80%D0%B1%D0%B8%D1%82",
  },
  {
    name: "Иркутск",
    title: "Иркутск",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D1%80%D0%BA%D1%83%D1%82%D1%81%D0%BA",
  },
  {
    name: "Исилькуль",
    title: "Исилькуль",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D1%81%D0%B8%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8C",
  },
  {
    name: "Искитим",
    title: "Искитим",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D1%81%D0%BA%D0%B8%D1%82%D0%B8%D0%BC",
  },
  {
    name: "Истра",
    title: "Истра (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D1%80%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Ишим",
    title: "Ишим",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D1%88%D0%B8%D0%BC",
  },
  {
    name: "Ишимбай",
    title: "Ишимбай",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D1%88%D0%B8%D0%BC%D0%B1%D0%B0%D0%B9",
  },
  {
    name: "Йошкар-Ола",
    title: "Йошкар-Ола",
    url: "https://ru.wikipedia.org/wiki/%D0%99%D0%BE%D1%88%D0%BA%D0%B0%D1%80-%D0%9E%D0%BB%D0%B0",
  },
  {
    name: "Кадников",
    title: "Кадников",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B4%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2",
  },
  {
    name: "Казань",
    title: "Казань",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C",
  },
  {
    name: "Калач",
    title: "Калач (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B0%D1%87_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Калач-на-Дону",
    title: "Калач-на-Дону",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B0%D1%87-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
  },
  {
    name: "Калачинск",
    title: "Калачинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B0%D1%87%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Калининград",
    title: "Калининград",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4",
  },
  {
    name: "Калининск",
    title: "Калининск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Калтан",
    title: "Калтан (Кемеровская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D1%82%D0%B0%D0%BD_(%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Калуга",
    title: "Калуга",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D1%83%D0%B3%D0%B0",
  },
  {
    name: "Калязин",
    title: "Калязин",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D1%8F%D0%B7%D0%B8%D0%BD",
  },
  {
    name: "Камбарка",
    title: "Камбарка",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D0%B1%D0%B0%D1%80%D0%BA%D0%B0",
  },
  {
    name: "Каменка",
    title: "Каменка (город, Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BA%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Каменногорск",
    title: "Каменногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Каменск-Уральский",
    title: "Каменск-Уральский",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA-%D0%A3%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Каменск-Шахтинский",
    title: "Каменск-Шахтинский",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA-%D0%A8%D0%B0%D1%85%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Камень-на-Оби",
    title: "Камень-на-Оби",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D1%8C-%D0%BD%D0%B0-%D0%9E%D0%B1%D0%B8",
  },
  {
    name: "Камешково",
    title: "Камешково",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D1%88%D0%BA%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Камызяк",
    title: "Камызяк",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D1%8B%D0%B7%D1%8F%D0%BA",
  },
  {
    name: "Камышин",
    title: "Камышин",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D1%8B%D1%88%D0%B8%D0%BD",
  },
  {
    name: "Камышлов",
    title: "Камышлов",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D1%8B%D1%88%D0%BB%D0%BE%D0%B2",
  },
  {
    name: "Канаш",
    title: "Канаш",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D0%B0%D1%88",
  },
  {
    name: "Кандалакша",
    title: "Кандалакша",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D0%B4%D0%B0%D0%BB%D0%B0%D0%BA%D1%88%D0%B0",
  },
  {
    name: "Канск",
    title: "Канск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Карабаново",
    title: "Карабаново",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Карабаш",
    title: "Карабаш",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D1%88",
  },
  {
    name: "Карабулак",
    title: "Карабулак (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D0%B1%D1%83%D0%BB%D0%B0%D0%BA_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Карасук",
    title: "Карасук (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D1%81%D1%83%D0%BA_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Карачаевск",
    title: "Карачаевск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D1%87%D0%B0%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Карачев",
    title: "Карачев",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B0%D1%87%D0%B5%D0%B2",
  },
  {
    name: "Каргат",
    title: "Каргат (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B3%D0%B0%D1%82_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Каргополь",
    title: "Каргополь",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B3%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C",
  },
  {
    name: "Карпинск",
    title: "Карпинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%BF%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Карталы",
    title: "Карталы",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%82%D0%B0%D0%BB%D1%8B",
  },
  {
    name: "Касимов",
    title: "Касимов",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%81%D0%B8%D0%BC%D0%BE%D0%B2",
  },
  {
    name: "Касли",
    title: "Касли",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%81%D0%BB%D0%B8",
  },
  {
    name: "Каспийск",
    title: "Каспийск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%81%D0%BF%D0%B8%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Катав-Ивановск",
    title: "Катав-Ивановск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B0%D0%B2-%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Катайск",
    title: "Катайск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B0%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Качканар",
    title: "Качканар",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%87%D0%BA%D0%B0%D0%BD%D0%B0%D1%80",
  },
  {
    name: "Кашин",
    title: "Кашин",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%88%D0%B8%D0%BD",
  },
  {
    name: "Кашира",
    title: "Кашира",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%88%D0%B8%D1%80%D0%B0",
  },
  {
    name: "Кедровый",
    title: "Кедровый (Томская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D0%B4%D1%80%D0%BE%D0%B2%D1%8B%D0%B9_(%D0%A2%D0%BE%D0%BC%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Кемерово",
    title: "Кемерово",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Кемь",
    title: "Кемь (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D0%BC%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Керчь",
    title: "Керчь",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B5%D1%80%D1%87%D1%8C",
  },
  {
    name: "Кизел",
    title: "Кизел",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B7%D0%B5%D0%BB",
  },
  {
    name: "Кизилюрт",
    title: "Кизилюрт",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B7%D0%B8%D0%BB%D1%8E%D1%80%D1%82",
  },
  {
    name: "Кизляр",
    title: "Кизляр",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B7%D0%BB%D1%8F%D1%80",
  },
  {
    name: "Кимовск",
    title: "Кимовск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BC%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Кимры",
    title: "Кимры",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BC%D1%80%D1%8B",
  },
  {
    name: "Кингисепп",
    title: "Кингисепп",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BD%D0%B3%D0%B8%D1%81%D0%B5%D0%BF%D0%BF",
  },
  {
    name: "Кинель",
    title: "Кинель",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BD%D0%B5%D0%BB%D1%8C",
  },
  {
    name: "Кинешма",
    title: "Кинешма",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%BD%D0%B5%D1%88%D0%BC%D0%B0",
  },
  {
    name: "Киреевск",
    title: "Киреевск (Тульская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%B5%D0%B5%D0%B2%D1%81%D0%BA_(%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Киренск",
    title: "Киренск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Киржач",
    title: "Киржач",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%B6%D0%B0%D1%87",
  },
  {
    name: "Кириллов",
    title: "Кириллов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Кириши",
    title: "Кириши",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%B8%D1%88%D0%B8",
  },
  {
    name: "Киров",
    title: "Киров (Калужская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%BE%D0%B2_(%D0%9A%D0%B0%D0%BB%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Киров",
    title: "Киров (Кировская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%BE%D0%B2_(%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Кировград",
    title: "Кировград",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D0%B3%D1%80%D0%B0%D0%B4",
  },
  {
    name: "Кирово-Чепецк",
    title: "Кирово-Чепецк",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D0%BE-%D0%A7%D0%B5%D0%BF%D0%B5%D1%86%D0%BA",
  },
  {
    name: "Кировск",
    title: "Кировск (Ленинградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Кировск",
    title: "Кировск (Мурманская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA_(%D0%9C%D1%83%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Кирс",
    title: "Кирс",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D1%81",
  },
  {
    name: "Кирсанов",
    title: "Кирсанов",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%80%D1%81%D0%B0%D0%BD%D0%BE%D0%B2",
  },
  {
    name: "Киселёвск",
    title: "Киселёвск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%81%D0%B5%D0%BB%D1%91%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Кисловодск",
    title: "Кисловодск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D1%81%D0%BB%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D0%BA",
  },
  {
    name: "Клин",
    title: "Клин (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B8%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Клинцы",
    title: "Клинцы",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D0%B8%D0%BD%D1%86%D1%8B",
  },
  {
    name: "Княгинино",
    title: "Княгинино",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BD%D1%8F%D0%B3%D0%B8%D0%BD%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Ковдор",
    title: "Ковдор",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B2%D0%B4%D0%BE%D1%80",
  },
  {
    name: "Ковров",
    title: "Ковров",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B2%D1%80%D0%BE%D0%B2",
  },
  {
    name: "Ковылкино",
    title: "Ковылкино",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B2%D1%8B%D0%BB%D0%BA%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Когалым",
    title: "Когалым",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B3%D0%B0%D0%BB%D1%8B%D0%BC",
  },
  {
    name: "Кодинск",
    title: "Кодинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B4%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Козельск",
    title: "Козельск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B7%D0%B5%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Козловка",
    title: "Козловка (Чувашия)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B7%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0_(%D0%A7%D1%83%D0%B2%D0%B0%D1%88%D0%B8%D1%8F)",
  },
  {
    name: "Козьмодемьянск",
    title: "Козьмодемьянск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B7%D1%8C%D0%BC%D0%BE%D0%B4%D0%B5%D0%BC%D1%8C%D1%8F%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Кола",
    title: "Кола (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Кологрив",
    title: "Кологрив",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D0%BE%D0%B3%D1%80%D0%B8%D0%B2",
  },
  {
    name: "Коломна",
    title: "Коломна",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D0%BE%D0%BC%D0%BD%D0%B0",
  },
  {
    name: "Колпашево",
    title: "Колпашево",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D0%BF%D0%B0%D1%88%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Кольчугино",
    title: "Кольчугино",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D1%8C%D1%87%D1%83%D0%B3%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Коммунар",
    title: "Коммунар (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D0%BC%D1%83%D0%BD%D0%B0%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Комсомольск",
    title: "Комсомольск (Ивановская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D1%81%D0%BE%D0%BC%D0%BE%D0%BB%D1%8C%D1%81%D0%BA_(%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Комсомольск-на-Амуре",
    title: "Комсомольск-на-Амуре",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BC%D1%81%D0%BE%D0%BC%D0%BE%D0%BB%D1%8C%D1%81%D0%BA-%D0%BD%D0%B0-%D0%90%D0%BC%D1%83%D1%80%D0%B5",
  },
  {
    name: "Конаково",
    title: "Конаково",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%B0%D0%BA%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Кондопога",
    title: "Кондопога",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%B4%D0%BE%D0%BF%D0%BE%D0%B3%D0%B0",
  },
  {
    name: "Кондрово",
    title: "Кондрово",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Константиновск",
    title: "Константиновск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Копейск",
    title: "Копейск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BF%D0%B5%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Кораблино",
    title: "Кораблино",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%B0%D0%B1%D0%BB%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Кореновск",
    title: "Кореновск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%B5%D0%BD%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Коркино",
    title: "Коркино",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BA%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Королёв",
    title: "Королёв (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D1%91%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Короча",
    title: "Короча",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D1%87%D0%B0",
  },
  {
    name: "Корсаков",
    title: "Корсаков (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%81%D0%B0%D0%BA%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Коряжма",
    title: "Коряжма",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D1%8F%D0%B6%D0%BC%D0%B0",
  },
  {
    name: "Костерёво",
    title: "Костерёво",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D1%80%D1%91%D0%B2%D0%BE",
  },
  {
    name: "Костомукша",
    title: "Костомукша",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D0%BE%D0%BC%D1%83%D0%BA%D1%88%D0%B0",
  },
  {
    name: "Кострома",
    title: "Кострома",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%BC%D0%B0",
  },
  {
    name: "Котельники",
    title: "Котельники",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B8",
  },
  {
    name: "Котельниково",
    title: "Котельниково",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Котельнич",
    title: "Котельнич",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%87",
  },
  {
    name: "Котлас",
    title: "Котлас",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%82%D0%BB%D0%B0%D1%81",
  },
  {
    name: "Котово",
    title: "Котово",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%82%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Котовск",
    title: "Котовск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%82%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Кохма",
    title: "Кохма",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%85%D0%BC%D0%B0",
  },
  {
    name: "Красавино",
    title: "Красавино",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%B0%D0%B2%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Красноармейск",
    title: "Красноармейск (Московская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B0%D1%80%D0%BC%D0%B5%D0%B9%D1%81%D0%BA_(%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Красноармейск",
    title: "Красноармейск (Саратовская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B0%D1%80%D0%BC%D0%B5%D0%B9%D1%81%D0%BA_(%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Красновишерск",
    title: "Красновишерск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B2%D0%B8%D1%88%D0%B5%D1%80%D1%81%D0%BA",
  },
  {
    name: "Красногорск",
    title: "Красногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Краснодар",
    title: "Краснодар",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80",
  },
  {
    name: "Краснозаводск",
    title: "Краснозаводск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA",
  },
  {
    name: "Краснознаменск",
    title: "Краснознаменск (Калининградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA_(%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Краснознаменск",
    title: "Краснознаменск (Московская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA_(%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Краснокаменск",
    title: "Краснокаменск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Краснокамск",
    title: "Краснокамск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BA%D0%B0%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Красноперекопск",
    title: "Красноперекопск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%BF%D0%B5%D1%80%D0%B5%D0%BA%D0%BE%D0%BF%D1%81%D0%BA",
  },
  {
    name: "Краснослободск",
    title: "Краснослободск (Волгоградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D0%BB%D0%BE%D0%B1%D0%BE%D0%B4%D1%81%D0%BA_(%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Краснослободск",
    title: "Краснослободск (Мордовия)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D0%BB%D0%BE%D0%B1%D0%BE%D0%B4%D1%81%D0%BA_(%D0%9C%D0%BE%D1%80%D0%B4%D0%BE%D0%B2%D0%B8%D1%8F)",
  },
  {
    name: "Краснотурьинск",
    title: "Краснотурьинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%82%D1%83%D1%80%D1%8C%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Красноуральск",
    title: "Красноуральск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Красноуфимск",
    title: "Красноуфимск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%83%D1%84%D0%B8%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Красноярск",
    title: "Красноярск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA",
  },
  {
    name: "Красный Кут",
    title: "Красный Кут",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%9A%D1%83%D1%82",
  },
  {
    name: "Красный Сулин",
    title: "Красный Сулин",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%A1%D1%83%D0%BB%D0%B8%D0%BD",
  },
  {
    name: "Красный Холм",
    title: "Красный Холм",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B9_%D0%A5%D0%BE%D0%BB%D0%BC",
  },
  {
    name: "Кремёнки",
    title: "Кремёнки",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B5%D0%BC%D1%91%D0%BD%D0%BA%D0%B8",
  },
  {
    name: "Кропоткин",
    title: "Кропоткин (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%BE%D0%BF%D0%BE%D1%82%D0%BA%D0%B8%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Крымск",
    title: "Крымск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D1%8B%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Кстово",
    title: "Кстово",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%81%D1%82%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Кубинка",
    title: "Кубинка",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%B1%D0%B8%D0%BD%D0%BA%D0%B0",
  },
  {
    name: "Кувандык",
    title: "Кувандык",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%B2%D0%B0%D0%BD%D0%B4%D1%8B%D0%BA",
  },
  {
    name: "Кувшиново",
    title: "Кувшиново",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%B2%D1%88%D0%B8%D0%BD%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Кудрово",
    title: "Кудрово",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%B4%D1%80%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Кудымкар",
    title: "Кудымкар",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%B4%D1%8B%D0%BC%D0%BA%D0%B0%D1%80",
  },
  {
    name: "Кузнецк",
    title: "Кузнецк (Пензенская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BA_(%D0%9F%D0%B5%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Куйбышев",
    title: "Куйбышев (Новосибирская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%B9%D0%B1%D1%8B%D1%88%D0%B5%D0%B2_(%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Кукмор",
    title: "Кукмор",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BA%D0%BC%D0%BE%D1%80",
  },
  {
    name: "Кулебаки",
    title: "Кулебаки",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BB%D0%B5%D0%B1%D0%B0%D0%BA%D0%B8",
  },
  {
    name: "Кумертау",
    title: "Кумертау",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BC%D0%B5%D1%80%D1%82%D0%B0%D1%83",
  },
  {
    name: "Кунгур",
    title: "Кунгур",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BD%D0%B3%D1%83%D1%80",
  },
  {
    name: "Купино",
    title: "Купино (Новосибирская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D0%BF%D0%B8%D0%BD%D0%BE_(%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Курган",
    title: "Курган (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D0%B3%D0%B0%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Курганинск",
    title: "Курганинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Курильск",
    title: "Курильск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D0%B8%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Курлово",
    title: "Курлово",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D0%BB%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Куровское",
    title: "Куровское",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B5",
  },
  {
    name: "Курск",
    title: "Курск",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D1%81%D0%BA",
  },
  {
    name: "Куртамыш",
    title: "Куртамыш",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D1%82%D0%B0%D0%BC%D1%8B%D1%88",
  },
  {
    name: "Курчалой",
    title: "Курчалой",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D1%87%D0%B0%D0%BB%D0%BE%D0%B9",
  },
  {
    name: "Курчатов",
    title: "Курчатов (Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%80%D1%87%D0%B0%D1%82%D0%BE%D0%B2_(%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Куса",
    title: "Куса",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%81%D0%B0",
  },
  {
    name: "Кушва",
    title: "Кушва",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%83%D1%88%D0%B2%D0%B0",
  },
  {
    name: "Кызыл",
    title: "Кызыл",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%8B%D0%B7%D1%8B%D0%BB",
  },
  {
    name: "Кыштым",
    title: "Кыштым",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%8B%D1%88%D1%82%D1%8B%D0%BC",
  },
  {
    name: "Кяхта",
    title: "Кяхта",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%8F%D1%85%D1%82%D0%B0",
  },
  {
    name: "Лабинск",
    title: "Лабинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B1%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Лабытнанги",
    title: "Лабытнанги",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B1%D1%8B%D1%82%D0%BD%D0%B0%D0%BD%D0%B3%D0%B8",
  },
  {
    name: "Лагань",
    title: "Лагань",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B3%D0%B0%D0%BD%D1%8C",
  },
  {
    name: "Ладушкин",
    title: "Ладушкин",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B4%D1%83%D1%88%D0%BA%D0%B8%D0%BD",
  },
  {
    name: "Лаишево",
    title: "Лаишево",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%B8%D1%88%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Лакинск",
    title: "Лакинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%BA%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Лангепас",
    title: "Лангепас",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%BD%D0%B3%D0%B5%D0%BF%D0%B0%D1%81",
  },
  {
    name: "Лахденпохья",
    title: "Лахденпохья",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D1%85%D0%B4%D0%B5%D0%BD%D0%BF%D0%BE%D1%85%D1%8C%D1%8F",
  },
  {
    name: "Лебедянь",
    title: "Лебедянь",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D1%8F%D0%BD%D1%8C",
  },
  {
    name: "Лениногорск",
    title: "Лениногорск (Татарстан)",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D1%82%D0%B0%D0%BD)",
  },
  {
    name: "Ленинск",
    title: "Ленинск (Волгоградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA_(%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Ленинск-Кузнецкий",
    title: "Ленинск-Кузнецкий",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D1%81%D0%BA-%D0%9A%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Ленск",
    title: "Ленск",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Лермонтов",
    title: "Лермонтов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D1%80%D0%BC%D0%BE%D0%BD%D1%82%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Лесной",
    title: "Лесной (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D1%81%D0%BD%D0%BE%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Лесозаводск",
    title: "Лесозаводск",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D1%81%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA",
  },
  {
    name: "Лесосибирск",
    title: "Лесосибирск",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D1%81%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA",
  },
  {
    name: "Ливны",
    title: "Ливны",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%B2%D0%BD%D1%8B",
  },
  {
    name: "Ликино-Дулёво",
    title: "Ликино-Дулёво",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BA%D0%B8%D0%BD%D0%BE-%D0%94%D1%83%D0%BB%D1%91%D0%B2%D0%BE",
  },
  {
    name: "Липецк",
    title: "Липецк",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BF%D0%B5%D1%86%D0%BA",
  },
  {
    name: "Липки",
    title: "Липки (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BF%D0%BA%D0%B8_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Лиски",
    title: "Лиски",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%81%D0%BA%D0%B8",
  },
  {
    name: "Лихославль",
    title: "Лихославль",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D1%85%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C",
  },
  {
    name: "Лобня",
    title: "Лобня",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%B1%D0%BD%D1%8F",
  },
  {
    name: "Лодейное Поле",
    title: "Лодейное Поле",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%B4%D0%B5%D0%B9%D0%BD%D0%BE%D0%B5_%D0%9F%D0%BE%D0%BB%D0%B5",
  },
  {
    name: "Лосино-Петровский",
    title: "Лосино-Петровский",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D1%81%D0%B8%D0%BD%D0%BE-%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Луга",
    title: "Луга",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%83%D0%B3%D0%B0",
  },
  {
    name: "Луза",
    title: "Луза (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%83%D0%B7%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Лукоянов",
    title: "Лукоянов",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%83%D0%BA%D0%BE%D1%8F%D0%BD%D0%BE%D0%B2",
  },
  {
    name: "Луховицы",
    title: "Луховицы",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%83%D1%85%D0%BE%D0%B2%D0%B8%D1%86%D1%8B",
  },
  {
    name: "Лысково",
    title: "Лысково",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8B%D1%81%D0%BA%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Лысьва",
    title: "Лысьва",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8B%D1%81%D1%8C%D0%B2%D0%B0",
  },
  {
    name: "Лыткарино",
    title: "Лыткарино",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8B%D1%82%D0%BA%D0%B0%D1%80%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Льгов",
    title: "Льгов",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B3%D0%BE%D0%B2",
  },
  {
    name: "Любань",
    title: "Любань (Ленинградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8E%D0%B1%D0%B0%D0%BD%D1%8C_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Люберцы",
    title: "Люберцы",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8E%D0%B1%D0%B5%D1%80%D1%86%D1%8B",
  },
  {
    name: "Любим",
    title: "Любим",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8E%D0%B1%D0%B8%D0%BC",
  },
  {
    name: "Людиново",
    title: "Людиново",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Лянтор",
    title: "Лянтор",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D1%8F%D0%BD%D1%82%D0%BE%D1%80",
  },
  {
    name: "Магадан",
    title: "Магадан",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%B0%D0%B4%D0%B0%D0%BD",
  },
  {
    name: "Магас",
    title: "Магас",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%B0%D1%81",
  },
  {
    name: "Магнитогорск",
    title: "Магнитогорск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B3%D0%BD%D0%B8%D1%82%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Майкоп",
    title: "Майкоп",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B9%D0%BA%D0%BE%D0%BF",
  },
  {
    name: "Майский",
    title: "Майский (Кабардино-Балкария)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_(%D0%9A%D0%B0%D0%B1%D0%B0%D1%80%D0%B4%D0%B8%D0%BD%D0%BE-%D0%91%D0%B0%D0%BB%D0%BA%D0%B0%D1%80%D0%B8%D1%8F)",
  },
  {
    name: "Макаров",
    title: "Макаров (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Макарьев",
    title: "Макарьев",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D0%B0%D1%80%D1%8C%D0%B5%D0%B2",
  },
  {
    name: "Макушино",
    title: "Макушино",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D1%83%D1%88%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Малая Вишера",
    title: "Малая Вишера",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F_%D0%92%D0%B8%D1%88%D0%B5%D1%80%D0%B0",
  },
  {
    name: "Малгобек",
    title: "Малгобек",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%B3%D0%BE%D0%B1%D0%B5%D0%BA",
  },
  {
    name: "Малмыж",
    title: "Малмыж",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%BC%D1%8B%D0%B6",
  },
  {
    name: "Малоархангельск",
    title: "Малоархангельск (Орловская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%BE%D0%B0%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA_(%D0%9E%D1%80%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Малоярославец",
    title: "Малоярославец",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D0%BE%D1%8F%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%B5%D1%86",
  },
  {
    name: "Мамадыш",
    title: "Мамадыш",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BC%D0%B0%D0%B4%D1%8B%D1%88",
  },
  {
    name: "Мамоново",
    title: "Мамоново",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BC%D0%BE%D0%BD%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Мантурово",
    title: "Мантурово",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%82%D1%83%D1%80%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Мариинск",
    title: "Мариинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%B8%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Мариинский Посад",
    title: "Мариинский Посад",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%B8%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%9F%D0%BE%D1%81%D0%B0%D0%B4",
  },
  {
    name: "Маркс",
    title: "Маркс (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA%D1%81_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Махачкала",
    title: "Махачкала",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%85%D0%B0%D1%87%D0%BA%D0%B0%D0%BB%D0%B0",
  },
  {
    name: "Мглин",
    title: "Мглин",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B3%D0%BB%D0%B8%D0%BD",
  },
  {
    name: "Мегион",
    title: "Мегион",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B3%D0%B8%D0%BE%D0%BD",
  },
  {
    name: "Медвежьегорск",
    title: "Медвежьегорск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%B2%D0%B5%D0%B6%D1%8C%D0%B5%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Медногорск",
    title: "Медногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Медынь",
    title: "Медынь",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D1%8B%D0%BD%D1%8C",
  },
  {
    name: "Межгорье",
    title: "Межгорье (Башкортостан)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D0%B3%D0%BE%D1%80%D1%8C%D0%B5_(%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD)",
  },
  {
    name: "Междуреченск",
    title: "Междуреченск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Мезень",
    title: "Мезень (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B7%D0%B5%D0%BD%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Меленки",
    title: "Меленки",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BB%D0%B5%D0%BD%D0%BA%D0%B8",
  },
  {
    name: "Мелеуз",
    title: "Мелеуз",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BB%D0%B5%D1%83%D0%B7",
  },
  {
    name: "Менделеевск",
    title: "Менделеевск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BD%D0%B4%D0%B5%D0%BB%D0%B5%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Мензелинск",
    title: "Мензелинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BD%D0%B7%D0%B5%D0%BB%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Мещовск",
    title: "Мещовск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%89%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Миасс",
    title: "Миасс",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%B0%D1%81%D1%81",
  },
  {
    name: "Микунь",
    title: "Микунь",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BA%D1%83%D0%BD%D1%8C",
  },
  {
    name: "Миллерово",
    title: "Миллерово",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BB%D0%BB%D0%B5%D1%80%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Минеральные Воды",
    title: "Минеральные Воды",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%92%D0%BE%D0%B4%D1%8B",
  },
  {
    name: "Минусинск",
    title: "Минусинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BD%D1%83%D1%81%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Миньяр",
    title: "Миньяр",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BD%D1%8C%D1%8F%D1%80",
  },
  {
    name: "Мирный",
    title: "Мирный (Якутия)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%80%D0%BD%D1%8B%D0%B9_(%D0%AF%D0%BA%D1%83%D1%82%D0%B8%D1%8F)",
  },
  {
    name: "Мирный",
    title: "Мирный (город, Архангельская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%80%D0%BD%D1%8B%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,_%D0%90%D1%80%D1%85%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Михайлов",
    title: "Михайлов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Михайловка",
    title: "Михайловка (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Михайловск",
    title: "Михайловск (Свердловская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA_(%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Михайловск",
    title: "Михайловск (Ставропольский край)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D1%81%D0%BA_(%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9)",
  },
  {
    name: "Мичуринск",
    title: "Мичуринск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D1%87%D1%83%D1%80%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Могоча",
    title: "Могоча",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%BE%D1%87%D0%B0",
  },
  {
    name: "Можайск",
    title: "Можайск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B6%D0%B0%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Можга",
    title: "Можга",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B6%D0%B3%D0%B0",
  },
  {
    name: "Моздок",
    title: "Моздок",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B7%D0%B4%D0%BE%D0%BA",
  },
  {
    name: "Мончегорск",
    title: "Мончегорск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D1%87%D0%B5%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Морозовск",
    title: "Морозовск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Моршанск",
    title: "Моршанск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D1%88%D0%B0%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Мосальск",
    title: "Мосальск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Москва",
    title: "Москва",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0",
  },
  {
    name: "Муравленко",
    title: "Муравленко",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D1%83%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE",
  },
  {
    name: "Мураши",
    title: "Мураши",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D1%83%D1%80%D0%B0%D1%88%D0%B8",
  },
  {
    name: "Мурино",
    title: "Мурино",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D1%83%D1%80%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Мурманск",
    title: "Мурманск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D1%83%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Муром",
    title: "Муром",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D1%83%D1%80%D0%BE%D0%BC",
  },
  {
    name: "Мценск",
    title: "Мценск",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D1%86%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Мыски",
    title: "Мыски",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%81%D0%BA%D0%B8",
  },
  {
    name: "Мытищи",
    title: "Мытищи",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%82%D0%B8%D1%89%D0%B8",
  },
  {
    name: "Мышкин",
    title: "Мышкин",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D1%8B%D1%88%D0%BA%D0%B8%D0%BD",
  },
  {
    name: "Набережные Челны",
    title: "Набережные Челны",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D1%8B%D0%B5_%D0%A7%D0%B5%D0%BB%D0%BD%D1%8B",
  },
  {
    name: "Навашино",
    title: "Навашино",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B2%D0%B0%D1%88%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Наволоки",
    title: "Наволоки",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B2%D0%BE%D0%BB%D0%BE%D0%BA%D0%B8",
  },
  {
    name: "Надым",
    title: "Надым",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B4%D1%8B%D0%BC",
  },
  {
    name: "Назарово",
    title: "Назарово (Красноярский край)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D0%BE%D0%B2%D0%BE_(%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9)",
  },
  {
    name: "Назрань",
    title: "Назрань",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B7%D1%80%D0%B0%D0%BD%D1%8C",
  },
  {
    name: "Называевск",
    title: "Называевск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Нальчик",
    title: "Нальчик",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D0%BB%D1%8C%D1%87%D0%B8%D0%BA",
  },
  {
    name: "Нариманов",
    title: "Нариманов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D0%B8%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Наро-Фоминск",
    title: "Наро-Фоминск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D0%BE-%D0%A4%D0%BE%D0%BC%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Нарткала",
    title: "Нарткала",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D1%82%D0%BA%D0%B0%D0%BB%D0%B0",
  },
  {
    name: "Нарьян-Мар",
    title: "Нарьян-Мар",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D1%8C%D1%8F%D0%BD-%D0%9C%D0%B0%D1%80",
  },
  {
    name: "Находка",
    title: "Находка (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%85%D0%BE%D0%B4%D0%BA%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Невель",
    title: "Невель",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B2%D0%B5%D0%BB%D1%8C",
  },
  {
    name: "Невельск",
    title: "Невельск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B2%D0%B5%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Невинномысск",
    title: "Невинномысск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B2%D0%B8%D0%BD%D0%BD%D0%BE%D0%BC%D1%8B%D1%81%D1%81%D0%BA",
  },
  {
    name: "Невьянск",
    title: "Невьянск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B2%D1%8C%D1%8F%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Нелидово",
    title: "Нелидово",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%BB%D0%B8%D0%B4%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Неман",
    title: "Неман (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%BC%D0%B0%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Нерехта",
    title: "Нерехта (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%80%D0%B5%D1%85%D1%82%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Нерчинск",
    title: "Нерчинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%80%D1%87%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Нерюнгри",
    title: "Нерюнгри",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%80%D1%8E%D0%BD%D0%B3%D1%80%D0%B8",
  },
  {
    name: "Нестеров",
    title: "Нестеров (Калининградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%81%D1%82%D0%B5%D1%80%D0%BE%D0%B2_(%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Нефтегорск",
    title: "Нефтегорск (Самарская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%84%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Нефтекамск",
    title: "Нефтекамск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%84%D1%82%D0%B5%D0%BA%D0%B0%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Нефтекумск",
    title: "Нефтекумск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%84%D1%82%D0%B5%D0%BA%D1%83%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Нефтеюганск",
    title: "Нефтеюганск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%84%D1%82%D0%B5%D1%8E%D0%B3%D0%B0%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Нея",
    title: "Нея (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D1%8F_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Нижневартовск",
    title: "Нижневартовск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B6%D0%BD%D0%B5%D0%B2%D0%B0%D1%80%D1%82%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Нижнекамск",
    title: "Нижнекамск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B6%D0%BD%D0%B5%D0%BA%D0%B0%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Нижнеудинск",
    title: "Нижнеудинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B6%D0%BD%D0%B5%D1%83%D0%B4%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Нижние Серги",
    title: "Нижние Серги",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B5_%D0%A1%D0%B5%D1%80%D0%B3%D0%B8",
  },
  {
    name: "Нижний Ломов",
    title: "Нижний Ломов",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9_%D0%9B%D0%BE%D0%BC%D0%BE%D0%B2",
  },
  {
    name: "Нижний Новгород",
    title: "Нижний Новгород",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9_%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4",
  },
  {
    name: "Нижний Тагил",
    title: "Нижний Тагил",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B6%D0%BD%D0%B8%D0%B9_%D0%A2%D0%B0%D0%B3%D0%B8%D0%BB",
  },
  {
    name: "Нижняя Салда",
    title: "Нижняя Салда",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B6%D0%BD%D1%8F%D1%8F_%D0%A1%D0%B0%D0%BB%D0%B4%D0%B0",
  },
  {
    name: "Нижняя Тура",
    title: "Нижняя Тура",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B6%D0%BD%D1%8F%D1%8F_%D0%A2%D1%83%D1%80%D0%B0",
  },
  {
    name: "Николаевск",
    title: "Николаевск (Волгоградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D1%81%D0%BA_(%D0%92%D0%BE%D0%BB%D0%B3%D0%BE%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Николаевск-на-Амуре",
    title: "Николаевск-на-Амуре",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D1%81%D0%BA-%D0%BD%D0%B0-%D0%90%D0%BC%D1%83%D1%80%D0%B5",
  },
  {
    name: "Никольск",
    title: "Никольск (Вологодская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D1%81%D0%BA_(%D0%92%D0%BE%D0%BB%D0%BE%D0%B3%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Никольск",
    title: "Никольск (Пензенская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D1%81%D0%BA_(%D0%9F%D0%B5%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Никольское",
    title: "Никольское (Тосненский район)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_(%D0%A2%D0%BE%D1%81%D0%BD%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD)",
  },
  {
    name: "Новая Ладога",
    title: "Новая Ладога",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F_%D0%9B%D0%B0%D0%B4%D0%BE%D0%B3%D0%B0",
  },
  {
    name: "Новая Ляля",
    title: "Новая Ляля",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F_%D0%9B%D1%8F%D0%BB%D1%8F",
  },
  {
    name: "Новоалександровск",
    title: "Новоалександровск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Новоалтайск",
    title: "Новоалтайск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B0%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Новоаннинский",
    title: "Новоаннинский",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B0%D0%BD%D0%BD%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Нововоронеж",
    title: "Нововоронеж",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6",
  },
  {
    name: "Новодвинск",
    title: "Новодвинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Новозыбков",
    title: "Новозыбков",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%B7%D1%8B%D0%B1%D0%BA%D0%BE%D0%B2",
  },
  {
    name: "Новокубанск",
    title: "Новокубанск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BA%D1%83%D0%B1%D0%B0%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Новокузнецк",
    title: "Новокузнецк",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BA%D1%83%D0%B7%D0%BD%D0%B5%D1%86%D0%BA",
  },
  {
    name: "Новокуйбышевск",
    title: "Новокуйбышевск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BA%D1%83%D0%B9%D0%B1%D1%8B%D1%88%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Новомичуринск",
    title: "Новомичуринск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BC%D0%B8%D1%87%D1%83%D1%80%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Новомосковск",
    title: "Новомосковск (Тульская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BC%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA_(%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Новопавловск",
    title: "Новопавловск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Новоржев",
    title: "Новоржев",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%80%D0%B6%D0%B5%D0%B2",
  },
  {
    name: "Новороссийск",
    title: "Новороссийск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Новосибирск",
    title: "Новосибирск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA",
  },
  {
    name: "Новосиль",
    title: "Новосиль",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%BB%D1%8C",
  },
  {
    name: "Новосокольники",
    title: "Новосокольники",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%BE%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B8",
  },
  {
    name: "Новотроицк",
    title: "Новотроицк",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%82%D1%80%D0%BE%D0%B8%D1%86%D0%BA",
  },
  {
    name: "Новоузенск",
    title: "Новоузенск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%83%D0%B7%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Новоульяновск",
    title: "Новоульяновск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%83%D0%BB%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Новоуральск",
    title: "Новоуральск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Новохопёрск",
    title: "Новохопёрск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%85%D0%BE%D0%BF%D1%91%D1%80%D1%81%D0%BA",
  },
  {
    name: "Новочебоксарск",
    title: "Новочебоксарск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%87%D0%B5%D0%B1%D0%BE%D0%BA%D1%81%D0%B0%D1%80%D1%81%D0%BA",
  },
  {
    name: "Новочеркасск",
    title: "Новочеркасск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%87%D0%B5%D1%80%D0%BA%D0%B0%D1%81%D1%81%D0%BA",
  },
  {
    name: "Новошахтинск",
    title: "Новошахтинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D0%BE%D1%88%D0%B0%D1%85%D1%82%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Новый Оскол",
    title: "Новый Оскол",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%9E%D1%81%D0%BA%D0%BE%D0%BB",
  },
  {
    name: "Новый Уренгой",
    title: "Новый Уренгой",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9_%D0%A3%D1%80%D0%B5%D0%BD%D0%B3%D0%BE%D0%B9",
  },
  {
    name: "Ногинск",
    title: "Ногинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%B3%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Нолинск",
    title: "Нолинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D0%BB%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Норильск",
    title: "Норильск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%B8%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Ноябрьск",
    title: "Ноябрьск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%8F%D0%B1%D1%80%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Нурлат",
    title: "Нурлат",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D1%83%D1%80%D0%BB%D0%B0%D1%82",
  },
  {
    name: "Нытва",
    title: "Нытва",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D1%8B%D1%82%D0%B2%D0%B0",
  },
  {
    name: "Нюрба",
    title: "Нюрба",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D1%8E%D1%80%D0%B1%D0%B0",
  },
  {
    name: "Нягань",
    title: "Нягань",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D1%8F%D0%B3%D0%B0%D0%BD%D1%8C",
  },
  {
    name: "Нязепетровск",
    title: "Нязепетровск",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D1%8F%D0%B7%D0%B5%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Няндома",
    title: "Няндома",
    url: "https://ru.wikipedia.org/wiki/%D0%9D%D1%8F%D0%BD%D0%B4%D0%BE%D0%BC%D0%B0",
  },
  {
    name: "Облучье",
    title: "Облучье (Еврейская автономная область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BB%D1%83%D1%87%D1%8C%D0%B5_(%D0%95%D0%B2%D1%80%D0%B5%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Обнинск",
    title: "Обнинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BD%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Обоянь",
    title: "Обоянь",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%8F%D0%BD%D1%8C",
  },
  {
    name: "Обь",
    title: "Обь (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Одинцово",
    title: "Одинцово",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%B8%D0%BD%D1%86%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Озёрск",
    title: "Озёрск (Калининградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B7%D1%91%D1%80%D1%81%D0%BA_(%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Озёрск",
    title: "Озёрск (Челябинская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B7%D1%91%D1%80%D1%81%D0%BA_(%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Озёры",
    title: "Озёры",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B7%D1%91%D1%80%D1%8B",
  },
  {
    name: "Октябрьск",
    title: "Октябрьск (Самарская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C%D1%81%D0%BA_(%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Октябрьский",
    title: "Октябрьский (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C%D1%81%D0%BA%D0%B8%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Окуловка",
    title: "Окуловка",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BA%D1%83%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Олёкминск",
    title: "Олёкминск",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D1%91%D0%BA%D0%BC%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Оленегорск",
    title: "Оленегорск",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D0%B5%D0%BD%D0%B5%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Олонец",
    title: "Олонец",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BB%D0%BE%D0%BD%D0%B5%D1%86",
  },
  {
    name: "Омск",
    title: "Омск",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Омутнинск",
    title: "Омутнинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BC%D1%83%D1%82%D0%BD%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Онега",
    title: "Онега (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BD%D0%B5%D0%B3%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Опочка",
    title: "Опочка",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%BE%D1%87%D0%BA%D0%B0",
  },
  {
    name: "Орёл",
    title: "Орёл (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D1%91%D0%BB_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Оренбург",
    title: "Оренбург",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%B5%D0%BD%D0%B1%D1%83%D1%80%D0%B3",
  },
  {
    name: "Орехово-Зуево",
    title: "Орехово-Зуево",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%B5%D1%85%D0%BE%D0%B2%D0%BE-%D0%97%D1%83%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Орлов",
    title: "Орлов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%BB%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Орск",
    title: "Орск",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D1%81%D0%BA",
  },
  {
    name: "Оса",
    title: "Оса (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Осинники",
    title: "Осинники",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%B8%D0%BD%D0%BD%D0%B8%D0%BA%D0%B8",
  },
  {
    name: "Осташков",
    title: "Осташков",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D1%82%D0%B0%D1%88%D0%BA%D0%BE%D0%B2",
  },
  {
    name: "Остров",
    title: "Остров (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Островной",
    title: "Островной",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9",
  },
  {
    name: "Острогожск",
    title: "Острогожск",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE%D0%B6%D1%81%D0%BA",
  },
  {
    name: "Отрадное",
    title: "Отрадное (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D1%80%D0%B0%D0%B4%D0%BD%D0%BE%D0%B5_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Отрадный",
    title: "Отрадный",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%82%D1%80%D0%B0%D0%B4%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Оха",
    title: "Оха",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%85%D0%B0",
  },
  {
    name: "Оханск",
    title: "Оханск",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%85%D0%B0%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Очёр",
    title: "Очёр",
    url: "https://ru.wikipedia.org/wiki/%D0%9E%D1%87%D1%91%D1%80",
  },
  {
    name: "Павлово",
    title: "Павлово (город, Нижегородская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%BE_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,_%D0%9D%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Павловск",
    title: "Павловск (Воронежская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D1%81%D0%BA_(%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Павловский Посад",
    title: "Павловский Посад",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%9F%D0%BE%D1%81%D0%B0%D0%B4",
  },
  {
    name: "Палласовка",
    title: "Палласовка",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%BB%D0%B0%D1%81%D0%BE%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Партизанск",
    title: "Партизанск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D1%80%D1%82%D0%B8%D0%B7%D0%B0%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Певек",
    title: "Певек",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D0%B2%D0%B5%D0%BA",
  },
  {
    name: "Пенза",
    title: "Пенза",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BD%D0%B7%D0%B0",
  },
  {
    name: "Первомайск",
    title: "Первомайск (Нижегородская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%BC%D0%B0%D0%B9%D1%81%D0%BA_(%D0%9D%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Первоуральск",
    title: "Первоуральск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Перевоз",
    title: "Перевоз (Нижегородская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B7_(%D0%9D%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Пересвет",
    title: "Пересвет (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D0%B2%D0%B5%D1%82_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Переславль-Залесский",
    title: "Переславль-Залесский",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C-%D0%97%D0%B0%D0%BB%D0%B5%D1%81%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Пермь",
    title: "Пермь",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%BC%D1%8C",
  },
  {
    name: "Пестово",
    title: "Пестово",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Петров Вал",
    title: "Петров Вал",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2_%D0%92%D0%B0%D0%BB",
  },
  {
    name: "Петровск",
    title: "Петровск (Саратовская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA_(%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Петровск-Забайкальский",
    title: "Петровск-Забайкальский",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA-%D0%97%D0%B0%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Петрозаводск",
    title: "Петрозаводск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA",
  },
  {
    name: "Петропавловск-Камчатский",
    title: "Петропавловск-Камчатский",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D1%81%D0%BA-%D0%9A%D0%B0%D0%BC%D1%87%D0%B0%D1%82%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Петухово",
    title: "Петухово (Курганская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%83%D1%85%D0%BE%D0%B2%D0%BE_(%D0%9A%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Петушки",
    title: "Петушки (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D1%83%D1%88%D0%BA%D0%B8_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Печора",
    title: "Печора (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%87%D0%BE%D1%80%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Печоры",
    title: "Печоры",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%87%D0%BE%D1%80%D1%8B",
  },
  {
    name: "Пикалёво",
    title: "Пикалёво",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D0%BA%D0%B0%D0%BB%D1%91%D0%B2%D0%BE",
  },
  {
    name: "Пионерский",
    title: "Пионерский (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Питкяранта",
    title: "Питкяранта",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B8%D1%82%D0%BA%D1%8F%D1%80%D0%B0%D0%BD%D1%82%D0%B0",
  },
  {
    name: "Плавск",
    title: "Плавск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BB%D0%B0%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Пласт",
    title: "Пласт (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BB%D0%B0%D1%81%D1%82_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Плёс",
    title: "Плёс (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BB%D1%91%D1%81_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Поворино",
    title: "Поворино",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B2%D0%BE%D1%80%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Подольск",
    title: "Подольск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Подпорожье",
    title: "Подпорожье",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5",
  },
  {
    name: "Покачи",
    title: "Покачи",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D0%B0%D1%87%D0%B8",
  },
  {
    name: "Покров",
    title: "Покров (город, Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4,_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Покровск",
    title: "Покровск (Якутия)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D0%BA_(%D0%AF%D0%BA%D1%83%D1%82%D0%B8%D1%8F)",
  },
  {
    name: "Полевской",
    title: "Полевской",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B9",
  },
  {
    name: "Полесск",
    title: "Полесск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%B5%D1%81%D1%81%D0%BA",
  },
  {
    name: "Полысаево",
    title: "Полысаево",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8B%D1%81%D0%B0%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Полярные Зори",
    title: "Полярные Зори",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%97%D0%BE%D1%80%D0%B8",
  },
  {
    name: "Полярный",
    title: "Полярный",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Поронайск",
    title: "Поронайск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%80%D0%BE%D0%BD%D0%B0%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Порхов",
    title: "Порхов",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%80%D1%85%D0%BE%D0%B2",
  },
  {
    name: "Похвистнево",
    title: "Похвистнево",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%85%D0%B2%D0%B8%D1%81%D1%82%D0%BD%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Почеп",
    title: "Почеп",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%87%D0%B5%D0%BF",
  },
  {
    name: "Починок",
    title: "Починок (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%87%D0%B8%D0%BD%D0%BE%D0%BA_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Пошехонье",
    title: "Пошехонье (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D1%88%D0%B5%D1%85%D0%BE%D0%BD%D1%8C%D0%B5_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Правдинск",
    title: "Правдинск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D0%B2%D0%B4%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Приволжск",
    title: "Приволжск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%B2%D0%BE%D0%BB%D0%B6%D1%81%D0%BA",
  },
  {
    name: "Приморск",
    title: "Приморск (Калининградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA_(%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Приморск",
    title: "Приморск (Ленинградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA_(%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Приморско-Ахтарск",
    title: "Приморско-Ахтарск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%BE-%D0%90%D1%85%D1%82%D0%B0%D1%80%D1%81%D0%BA",
  },
  {
    name: "Приозерск",
    title: "Приозерск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BE%D0%B7%D0%B5%D1%80%D1%81%D0%BA",
  },
  {
    name: "Прокопьевск",
    title: "Прокопьевск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%BA%D0%BE%D0%BF%D1%8C%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Пролетарск",
    title: "Пролетарск (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B0%D1%80%D1%81%D0%BA_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Протвино",
    title: "Протвино",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%82%D0%B2%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Прохладный",
    title: "Прохладный",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%85%D0%BB%D0%B0%D0%B4%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Псков",
    title: "Псков",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%81%D0%BA%D0%BE%D0%B2",
  },
  {
    name: "Пугачёв",
    title: "Пугачёв (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D0%B3%D0%B0%D1%87%D1%91%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Пудож",
    title: "Пудож",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D0%B4%D0%BE%D0%B6",
  },
  {
    name: "Пустошка",
    title: "Пустошка",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D1%81%D1%82%D0%BE%D1%88%D0%BA%D0%B0",
  },
  {
    name: "Пучеж",
    title: "Пучеж",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D1%87%D0%B5%D0%B6",
  },
  {
    name: "Пушкино",
    title: "Пушкино",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Пущино",
    title: "Пущино",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D1%89%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Пыталово",
    title: "Пыталово",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%8B%D1%82%D0%B0%D0%BB%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Пыть-Ях",
    title: "Пыть-Ях",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%8B%D1%82%D1%8C-%D0%AF%D1%85",
  },
  {
    name: "Пятигорск",
    title: "Пятигорск",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%8F%D1%82%D0%B8%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Радужный",
    title: "Радужный (Владимирская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D1%83%D0%B6%D0%BD%D1%8B%D0%B9_(%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Радужный",
    title: "Радужный (Ханты-Мансийский автономный округ)",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B4%D1%83%D0%B6%D0%BD%D1%8B%D0%B9_(%D0%A5%D0%B0%D0%BD%D1%82%D1%8B-%D0%9C%D0%B0%D0%BD%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BA%D1%80%D1%83%D0%B3)",
  },
  {
    name: "Райчихинск",
    title: "Райчихинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B9%D1%87%D0%B8%D1%85%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Раменское",
    title: "Раменское",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B5",
  },
  {
    name: "Рассказово",
    title: "Рассказово",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D1%81%D1%81%D0%BA%D0%B0%D0%B7%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Ревда",
    title: "Ревда (Свердловская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B2%D0%B4%D0%B0_(%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Реж",
    title: "Реж",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B6",
  },
  {
    name: "Реутов",
    title: "Реутов",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%83%D1%82%D0%BE%D0%B2",
  },
  {
    name: "Ржев",
    title: "Ржев",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%B6%D0%B5%D0%B2",
  },
  {
    name: "Родники",
    title: "Родники (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Рославль",
    title: "Рославль",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C",
  },
  {
    name: "Россошь",
    title: "Россошь",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%81%D0%BE%D1%88%D1%8C",
  },
  {
    name: "Ростов-на-Дону",
    title: "Ростов-на-Дону",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83",
  },
  {
    name: "Ростов",
    title: "Ростов",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2",
  },
  {
    name: "Рошаль",
    title: "Рошаль (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%88%D0%B0%D0%BB%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Ртищево",
    title: "Ртищево",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%82%D0%B8%D1%89%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Рубцовск",
    title: "Рубцовск",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Рудня",
    title: "Рудня (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%B4%D0%BD%D1%8F_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Руза",
    title: "Руза",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%B7%D0%B0",
  },
  {
    name: "Рузаевка",
    title: "Рузаевка",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D0%B7%D0%B0%D0%B5%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Рыбинск",
    title: "Рыбинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8B%D0%B1%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Рыбное",
    title: "Рыбное",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8B%D0%B1%D0%BD%D0%BE%D0%B5",
  },
  {
    name: "Рыльск",
    title: "Рыльск",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8B%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Ряжск",
    title: "Ряжск",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B6%D1%81%D0%BA",
  },
  {
    name: "Рязань",
    title: "Рязань",
    url: "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%8C",
  },
  {
    name: "Саки",
    title: "Саки (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BA%D0%B8_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Салават",
    title: "Салават",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BB%D0%B0%D0%B2%D0%B0%D1%82",
  },
  {
    name: "Салаир",
    title: "Салаир",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BB%D0%B0%D0%B8%D1%80",
  },
  {
    name: "Салехард",
    title: "Салехард",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BB%D0%B5%D1%85%D0%B0%D1%80%D0%B4",
  },
  {
    name: "Сальск",
    title: "Сальск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Самара",
    title: "Самара",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BC%D0%B0%D1%80%D0%B0",
  },
  {
    name: "Санкт-Петербург",
    title: "Санкт-Петербург",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3",
  },
  {
    name: "Саранск",
    title: "Саранск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%80%D0%B0%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Сарапул",
    title: "Сарапул",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%80%D0%B0%D0%BF%D1%83%D0%BB",
  },
  {
    name: "Саратов",
    title: "Саратов",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2",
  },
  {
    name: "Саров",
    title: "Саров",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%80%D0%BE%D0%B2",
  },
  {
    name: "Сасово",
    title: "Сасово",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%81%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Сатка",
    title: "Сатка",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%82%D0%BA%D0%B0",
  },
  {
    name: "Сафоново",
    title: "Сафоново (Смоленская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D0%BE_(%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Саяногорск",
    title: "Саяногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%8F%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Саянск",
    title: "Саянск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D1%8F%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Светлогорск",
    title: "Светлогорск (Калининградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B5%D1%82%D0%BB%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Светлоград",
    title: "Светлоград",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B5%D1%82%D0%BB%D0%BE%D0%B3%D1%80%D0%B0%D0%B4",
  },
  {
    name: "Светлый",
    title: "Светлый (Калининградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B5%D1%82%D0%BB%D1%8B%D0%B9_(%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Светогорск",
    title: "Светогорск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Свирск",
    title: "Свирск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B8%D1%80%D1%81%D0%BA",
  },
  {
    name: "Свободный",
    title: "Свободный (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Себеж",
    title: "Себеж",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B1%D0%B5%D0%B6",
  },
  {
    name: "Севастополь",
    title: "Севастополь",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C",
  },
  {
    name: "Северо-Курильск",
    title: "Северо-Курильск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BE-%D0%9A%D1%83%D1%80%D0%B8%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Северобайкальск",
    title: "Северобайкальск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D0%B1%D0%B0%D0%B9%D0%BA%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Северодвинск",
    title: "Северодвинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D0%B4%D0%B2%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Североморск",
    title: "Североморск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D0%BC%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Североуральск",
    title: "Североуральск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Северск",
    title: "Северск (Томская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D1%81%D0%BA_(%D0%A2%D0%BE%D0%BC%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Севск",
    title: "Севск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Сегежа",
    title: "Сегежа",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B3%D0%B5%D0%B6%D0%B0",
  },
  {
    name: "Сельцо",
    title: "Сельцо (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BB%D1%8C%D1%86%D0%BE_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Семёнов",
    title: "Семёнов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BC%D1%91%D0%BD%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Семикаракорск",
    title: "Семикаракорск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0%D1%80%D0%B0%D0%BA%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Семилуки",
    title: "Семилуки",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BC%D0%B8%D0%BB%D1%83%D0%BA%D0%B8",
  },
  {
    name: "Сенгилей",
    title: "Сенгилей",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%BD%D0%B3%D0%B8%D0%BB%D0%B5%D0%B9",
  },
  {
    name: "Серафимович",
    title: "Серафимович (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B0%D1%84%D0%B8%D0%BC%D0%BE%D0%B2%D0%B8%D1%87_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Сергач",
    title: "Сергач",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B3%D0%B0%D1%87",
  },
  {
    name: "Сергиев Посад",
    title: "Сергиев Посад",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B3%D0%B8%D0%B5%D0%B2_%D0%9F%D0%BE%D1%81%D0%B0%D0%B4",
  },
  {
    name: "Сердобск",
    title: "Сердобск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%B4%D0%BE%D0%B1%D1%81%D0%BA",
  },
  {
    name: "Серов",
    title: "Серов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Серпухов",
    title: "Серпухов",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D0%BF%D1%83%D1%85%D0%BE%D0%B2",
  },
  {
    name: "Сертолово",
    title: "Сертолово (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D1%82%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Сибай",
    title: "Сибай",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%B1%D0%B0%D0%B9",
  },
  {
    name: "Сим",
    title: "Сим (Челябинская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC_(%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Симферополь",
    title: "Симферополь",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BC%D1%84%D0%B5%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C",
  },
  {
    name: "Сковородино",
    title: "Сковородино",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BE%D0%B2%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Скопин",
    title: "Скопин",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BE%D0%BF%D0%B8%D0%BD",
  },
  {
    name: "Славгород",
    title: "Славгород (Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%B0%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4_(%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Славск",
    title: "Славск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%B0%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Славянск-на-Кубани",
    title: "Славянск-на-Кубани",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%B0%D0%B2%D1%8F%D0%BD%D1%81%D0%BA-%D0%BD%D0%B0-%D0%9A%D1%83%D0%B1%D0%B0%D0%BD%D0%B8",
  },
  {
    name: "Сланцы",
    title: "Сланцы (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%B0%D0%BD%D1%86%D1%8B_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Слободской",
    title: "Слободской",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%BE%D0%B1%D0%BE%D0%B4%D1%81%D0%BA%D0%BE%D0%B9",
  },
  {
    name: "Слюдянка",
    title: "Слюдянка (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D1%8E%D0%B4%D1%8F%D0%BD%D0%BA%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Смоленск",
    title: "Смоленск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Снежинск",
    title: "Снежинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BD%D0%B5%D0%B6%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Снежногорск",
    title: "Снежногорск (Мурманская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BD%D0%B5%D0%B6%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%9C%D1%83%D1%80%D0%BC%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Собинка",
    title: "Собинка",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%B8%D0%BD%D0%BA%D0%B0",
  },
  {
    name: "Советск",
    title: "Советск (Калининградская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA_(%D0%9A%D0%B0%D0%BB%D0%B8%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Советск",
    title: "Советск (Кировская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA_(%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Советск",
    title: "Советск (Тульская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA_(%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Советская Гавань",
    title: "Советская Гавань",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D0%93%D0%B0%D0%B2%D0%B0%D0%BD%D1%8C",
  },
  {
    name: "Советский",
    title: "Советский (Ханты-Мансийский автономный округ)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9_(%D0%A5%D0%B0%D0%BD%D1%82%D1%8B-%D0%9C%D0%B0%D0%BD%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%B0%D0%B2%D1%82%D0%BE%D0%BD%D0%BE%D0%BC%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BA%D1%80%D1%83%D0%B3)",
  },
  {
    name: "Сокол",
    title: "Сокол (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Солигалич",
    title: "Солигалич",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%B8%D0%B3%D0%B0%D0%BB%D0%B8%D1%87",
  },
  {
    name: "Соликамск",
    title: "Соликамск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%B8%D0%BA%D0%B0%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Солнечногорск",
    title: "Солнечногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Соль-Илецк",
    title: "Соль-Илецк",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D1%8C-%D0%98%D0%BB%D0%B5%D1%86%D0%BA",
  },
  {
    name: "Сольвычегодск",
    title: "Сольвычегодск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D1%8C%D0%B2%D1%8B%D1%87%D0%B5%D0%B3%D0%BE%D0%B4%D1%81%D0%BA",
  },
  {
    name: "Сольцы",
    title: "Сольцы",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D1%8C%D1%86%D1%8B",
  },
  {
    name: "Сорочинск",
    title: "Сорочинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D0%BE%D1%87%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Сорск",
    title: "Сорск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Сортавала",
    title: "Сортавала",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D1%82%D0%B0%D0%B2%D0%B0%D0%BB%D0%B0",
  },
  {
    name: "Сосенский",
    title: "Сосенский",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%81%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Сосновка",
    title: "Сосновка (Кировская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0_(%D0%9A%D0%B8%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Сосновоборск",
    title: "Сосновоборск (Красноярский край)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BE%D0%B1%D0%BE%D1%80%D1%81%D0%BA_(%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D1%8F%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9)",
  },
  {
    name: "Сосновый Бор",
    title: "Сосновый Бор (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9_%D0%91%D0%BE%D1%80_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Сосногорск",
    title: "Сосногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%81%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Сочи",
    title: "Сочи",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%87%D0%B8",
  },
  {
    name: "Спас-Деменск",
    title: "Спас-Деменск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B0%D1%81-%D0%94%D0%B5%D0%BC%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Спас-Клепики",
    title: "Спас-Клепики",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B0%D1%81-%D0%9A%D0%BB%D0%B5%D0%BF%D0%B8%D0%BA%D0%B8",
  },
  {
    name: "Спасск",
    title: "Спасск (Пензенская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B0%D1%81%D1%81%D0%BA_(%D0%9F%D0%B5%D0%BD%D0%B7%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Спасск-Дальний",
    title: "Спасск-Дальний",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B0%D1%81%D1%81%D0%BA-%D0%94%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9",
  },
  {
    name: "Спасск-Рязанский",
    title: "Спасск-Рязанский",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B0%D1%81%D1%81%D0%BA-%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Среднеколымск",
    title: "Среднеколымск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D0%BA%D0%BE%D0%BB%D1%8B%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Среднеуральск",
    title: "Среднеуральск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Сретенск",
    title: "Сретенск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D1%82%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Ставрополь",
    title: "Ставрополь",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C",
  },
  {
    name: "Старая Купавна",
    title: "Старая Купавна",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%B0%D1%8F_%D0%9A%D1%83%D0%BF%D0%B0%D0%B2%D0%BD%D0%B0",
  },
  {
    name: "Старая Русса",
    title: "Старая Русса",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%B0%D1%8F_%D0%A0%D1%83%D1%81%D1%81%D0%B0",
  },
  {
    name: "Старица",
    title: "Старица (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%B8%D1%86%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Стародуб",
    title: "Стародуб",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B4%D1%83%D0%B1",
  },
  {
    name: "Старый Крым",
    title: "Старый Крым",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D1%8B%D0%B9_%D0%9A%D1%80%D1%8B%D0%BC",
  },
  {
    name: "Старый Оскол",
    title: "Старый Оскол",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D1%80%D1%8B%D0%B9_%D0%9E%D1%81%D0%BA%D0%BE%D0%BB",
  },
  {
    name: "Стерлитамак",
    title: "Стерлитамак",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D1%80%D0%BB%D0%B8%D1%82%D0%B0%D0%BC%D0%B0%D0%BA",
  },
  {
    name: "Стрежевой",
    title: "Стрежевой",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B5%D0%B6%D0%B5%D0%B2%D0%BE%D0%B9",
  },
  {
    name: "Строитель",
    title: "Строитель (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%BE%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Струнино",
    title: "Струнино",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D1%83%D0%BD%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Ступино",
    title: "Ступино",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%83%D0%BF%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Суворов",
    title: "Суворов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%B2%D0%BE%D1%80%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Судак",
    title: "Судак (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%B4%D0%B0%D0%BA_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Суджа",
    title: "Суджа",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%B4%D0%B6%D0%B0",
  },
  {
    name: "Судогда",
    title: "Судогда",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%B4%D0%BE%D0%B3%D0%B4%D0%B0",
  },
  {
    name: "Суздаль",
    title: "Суздаль",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%B7%D0%B4%D0%B0%D0%BB%D1%8C",
  },
  {
    name: "Сунжа",
    title: "Сунжа (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%BD%D0%B6%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Суоярви",
    title: "Суоярви",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D0%BE%D1%8F%D1%80%D0%B2%D0%B8",
  },
  {
    name: "Сураж",
    title: "Сураж",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%80%D0%B0%D0%B6",
  },
  {
    name: "Сургут",
    title: "Сургут",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%80%D0%B3%D1%83%D1%82",
  },
  {
    name: "Суровикино",
    title: "Суровикино",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%80%D0%BE%D0%B2%D0%B8%D0%BA%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Сурск",
    title: "Сурск",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%80%D1%81%D0%BA",
  },
  {
    name: "Сусуман",
    title: "Сусуман",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%81%D1%83%D0%BC%D0%B0%D0%BD",
  },
  {
    name: "Сухиничи",
    title: "Сухиничи",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%85%D0%B8%D0%BD%D0%B8%D1%87%D0%B8",
  },
  {
    name: "Сухой Лог",
    title: "Сухой Лог (Свердловская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%83%D1%85%D0%BE%D0%B9_%D0%9B%D0%BE%D0%B3_(%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Сызрань",
    title: "Сызрань",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%8B%D0%B7%D1%80%D0%B0%D0%BD%D1%8C",
  },
  {
    name: "Сыктывкар",
    title: "Сыктывкар",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%8B%D0%BA%D1%82%D1%8B%D0%B2%D0%BA%D0%B0%D1%80",
  },
  {
    name: "Сысерть",
    title: "Сысерть (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%8B%D1%81%D0%B5%D1%80%D1%82%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Сычёвка",
    title: "Сычёвка",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%8B%D1%87%D1%91%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Сясьстрой",
    title: "Сясьстрой",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D1%8F%D1%81%D1%8C%D1%81%D1%82%D1%80%D0%BE%D0%B9",
  },
  {
    name: "Тавда",
    title: "Тавда (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B2%D0%B4%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Таганрог",
    title: "Таганрог",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B3%D0%B0%D0%BD%D1%80%D0%BE%D0%B3",
  },
  {
    name: "Тайга",
    title: "Тайга (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B9%D0%B3%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Тайшет",
    title: "Тайшет",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%B9%D1%88%D0%B5%D1%82",
  },
  {
    name: "Талдом",
    title: "Талдом",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BB%D0%B4%D0%BE%D0%BC",
  },
  {
    name: "Талица",
    title: "Талица (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BB%D0%B8%D1%86%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Тамбов",
    title: "Тамбов",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BC%D0%B1%D0%BE%D0%B2",
  },
  {
    name: "Тара",
    title: "Тара (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D1%80%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Тарко-Сале",
    title: "Тарко-Сале",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D1%80%D0%BA%D0%BE-%D0%A1%D0%B0%D0%BB%D0%B5",
  },
  {
    name: "Таруса",
    title: "Таруса (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D1%80%D1%83%D1%81%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Татарск",
    title: "Татарск",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D1%82%D0%B0%D1%80%D1%81%D0%BA",
  },
  {
    name: "Таштагол",
    title: "Таштагол",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D1%88%D1%82%D0%B0%D0%B3%D0%BE%D0%BB",
  },
  {
    name: "Тверь",
    title: "Тверь",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B2%D0%B5%D1%80%D1%8C",
  },
  {
    name: "Теберда",
    title: "Теберда",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%B1%D0%B5%D1%80%D0%B4%D0%B0",
  },
  {
    name: "Тейково",
    title: "Тейково",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%B9%D0%BA%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Темников",
    title: "Темников",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BC%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2",
  },
  {
    name: "Темрюк",
    title: "Темрюк",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D0%BC%D1%80%D1%8E%D0%BA",
  },
  {
    name: "Терек",
    title: "Терек (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%80%D0%B5%D0%BA_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Тетюши",
    title: "Тетюши",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B5%D1%82%D1%8E%D1%88%D0%B8",
  },
  {
    name: "Тимашёвск",
    title: "Тимашёвск",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B8%D0%BC%D0%B0%D1%88%D1%91%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Тихвин",
    title: "Тихвин",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B8%D1%85%D0%B2%D0%B8%D0%BD",
  },
  {
    name: "Тихорецк",
    title: "Тихорецк",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%B8%D1%85%D0%BE%D1%80%D0%B5%D1%86%D0%BA",
  },
  {
    name: "Тобольск",
    title: "Тобольск",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%B1%D0%BE%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Тогучин",
    title: "Тогучин",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%B3%D1%83%D1%87%D0%B8%D0%BD",
  },
  {
    name: "Тольятти",
    title: "Тольятти",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BB%D1%8C%D1%8F%D1%82%D1%82%D0%B8",
  },
  {
    name: "Томари",
    title: "Томари (Россия)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BC%D0%B0%D1%80%D0%B8_(%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F)",
  },
  {
    name: "Томмот",
    title: "Томмот",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BC%D0%BC%D0%BE%D1%82",
  },
  {
    name: "Томск",
    title: "Томск",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Топки",
    title: "Топки (Кемеровская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D0%BF%D0%BA%D0%B8_(%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Торжок",
    title: "Торжок",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D1%80%D0%B6%D0%BE%D0%BA",
  },
  {
    name: "Торопец",
    title: "Торопец",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D1%80%D0%BE%D0%BF%D0%B5%D1%86",
  },
  {
    name: "Тосно",
    title: "Тосно",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D1%81%D0%BD%D0%BE",
  },
  {
    name: "Тотьма",
    title: "Тотьма",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D0%BE%D1%82%D1%8C%D0%BC%D0%B0",
  },
  {
    name: "Трёхгорный",
    title: "Трёхгорный",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%91%D1%85%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Троицк",
    title: "Троицк (Челябинская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA_(%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Трубчевск",
    title: "Трубчевск",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D1%83%D0%B1%D1%87%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Туапсе",
    title: "Туапсе",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D0%B0%D0%BF%D1%81%D0%B5",
  },
  {
    name: "Туймазы",
    title: "Туймазы",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D0%B9%D0%BC%D0%B0%D0%B7%D1%8B",
  },
  {
    name: "Тула",
    title: "Тула",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D0%BB%D0%B0",
  },
  {
    name: "Тулун",
    title: "Тулун",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D0%BB%D1%83%D0%BD",
  },
  {
    name: "Туран",
    title: "Туран (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D1%80%D0%B0%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Туринск",
    title: "Туринск",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D1%80%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Тутаев",
    title: "Тутаев",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D1%82%D0%B0%D0%B5%D0%B2",
  },
  {
    name: "Тында",
    title: "Тында",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%8B%D0%BD%D0%B4%D0%B0",
  },
  {
    name: "Тырныауз",
    title: "Тырныауз",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%8B%D1%80%D0%BD%D1%8B%D0%B0%D1%83%D0%B7",
  },
  {
    name: "Тюкалинск",
    title: "Тюкалинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%8E%D0%BA%D0%B0%D0%BB%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Тюмень",
    title: "Тюмень",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%8E%D0%BC%D0%B5%D0%BD%D1%8C",
  },
  {
    name: "Уварово",
    title: "Уварово (Тамбовская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%D0%BE_(%D0%A2%D0%B0%D0%BC%D0%B1%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Углегорск",
    title: "Углегорск (Сахалинская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%B3%D0%BB%D0%B5%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%A1%D0%B0%D1%85%D0%B0%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Углич",
    title: "Углич",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%B3%D0%BB%D0%B8%D1%87",
  },
  {
    name: "Удачный",
    title: "Удачный",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%B4%D0%B0%D1%87%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Удомля",
    title: "Удомля",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%B4%D0%BE%D0%BC%D0%BB%D1%8F",
  },
  {
    name: "Ужур",
    title: "Ужур",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%B6%D1%83%D1%80",
  },
  {
    name: "Узловая",
    title: "Узловая",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%B7%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F",
  },
  {
    name: "Улан-Удэ",
    title: "Улан-Удэ",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%BB%D0%B0%D0%BD-%D0%A3%D0%B4%D1%8D",
  },
  {
    name: "Ульяновск",
    title: "Ульяновск",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%BB%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Унеча",
    title: "Унеча",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D0%BD%D0%B5%D1%87%D0%B0",
  },
  {
    name: "Урай",
    title: "Урай",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D0%B0%D0%B9",
  },
  {
    name: "Урень",
    title: "Урень",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D0%B5%D0%BD%D1%8C",
  },
  {
    name: "Уржум",
    title: "Уржум",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D0%B6%D1%83%D0%BC",
  },
  {
    name: "Урус-Мартан",
    title: "Урус-Мартан",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D1%83%D1%81-%D0%9C%D0%B0%D1%80%D1%82%D0%B0%D0%BD",
  },
  {
    name: "Урюпинск",
    title: "Урюпинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D1%8E%D0%BF%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Усинск",
    title: "Усинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Усмань",
    title: "Усмань",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D0%BC%D0%B0%D0%BD%D1%8C",
  },
  {
    name: "Усолье-Сибирское",
    title: "Усолье-Сибирское",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D0%BE%D0%BB%D1%8C%D0%B5-%D0%A1%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%D0%BE%D0%B5",
  },
  {
    name: "Усолье",
    title: "Усолье",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D0%BE%D0%BB%D1%8C%D0%B5",
  },
  {
    name: "Уссурийск",
    title: "Уссурийск",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D1%81%D1%83%D1%80%D0%B8%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Усть-Джегута",
    title: "Усть-Джегута",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D1%82%D1%8C-%D0%94%D0%B6%D0%B5%D0%B3%D1%83%D1%82%D0%B0",
  },
  {
    name: "Усть-Илимск",
    title: "Усть-Илимск",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D1%82%D1%8C-%D0%98%D0%BB%D0%B8%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Усть-Катав",
    title: "Усть-Катав",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D1%82%D1%8C-%D0%9A%D0%B0%D1%82%D0%B0%D0%B2",
  },
  {
    name: "Усть-Кут",
    title: "Усть-Кут",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D1%82%D1%8C-%D0%9A%D1%83%D1%82",
  },
  {
    name: "Усть-Лабинск",
    title: "Усть-Лабинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D1%82%D1%8C-%D0%9B%D0%B0%D0%B1%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Устюжна",
    title: "Устюжна",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%81%D1%82%D1%8E%D0%B6%D0%BD%D0%B0",
  },
  {
    name: "Уфа",
    title: "Уфа",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%84%D0%B0",
  },
  {
    name: "Ухта",
    title: "Ухта",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%85%D1%82%D0%B0",
  },
  {
    name: "Учалы",
    title: "Учалы",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%87%D0%B0%D0%BB%D1%8B",
  },
  {
    name: "Уяр",
    title: "Уяр",
    url: "https://ru.wikipedia.org/wiki/%D0%A3%D1%8F%D1%80",
  },
  {
    name: "Фатеж",
    title: "Фатеж",
    url: "https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D1%82%D0%B5%D0%B6",
  },
  {
    name: "Феодосия",
    title: "Феодосия",
    url: "https://ru.wikipedia.org/wiki/%D0%A4%D0%B5%D0%BE%D0%B4%D0%BE%D1%81%D0%B8%D1%8F",
  },
  {
    name: "Фокино",
    title: "Фокино (Брянская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D0%BA%D0%B8%D0%BD%D0%BE_(%D0%91%D1%80%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Фокино",
    title: "Фокино (Приморский край)",
    url: "https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D0%BA%D0%B8%D0%BD%D0%BE_(%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D0%B9)",
  },
  {
    name: "Фролово",
    title: "Фролово",
    url: "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D0%BE%D0%BB%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Фрязино",
    title: "Фрязино",
    url: "https://ru.wikipedia.org/wiki/%D0%A4%D1%80%D1%8F%D0%B7%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Фурманов",
    title: "Фурманов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A4%D1%83%D1%80%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Хабаровск",
    title: "Хабаровск",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Хадыженск",
    title: "Хадыженск",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%B4%D1%8B%D0%B6%D0%B5%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Ханты-Мансийск",
    title: "Ханты-Мансийск",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%BD%D1%82%D1%8B-%D0%9C%D0%B0%D0%BD%D1%81%D0%B8%D0%B9%D1%81%D0%BA",
  },
  {
    name: "Харабали",
    title: "Харабали",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BB%D0%B8",
  },
  {
    name: "Харовск",
    title: "Харовск",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Хасавюрт",
    title: "Хасавюрт",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%81%D0%B0%D0%B2%D1%8E%D1%80%D1%82",
  },
  {
    name: "Хвалынск",
    title: "Хвалынск",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B2%D0%B0%D0%BB%D1%8B%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Хилок",
    title: "Хилок (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BB%D0%BE%D0%BA_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Химки",
    title: "Химки",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BC%D0%BA%D0%B8",
  },
  {
    name: "Холм",
    title: "Холм (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BB%D0%BC_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Холмск",
    title: "Холмск",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BB%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Хотьково",
    title: "Хотьково",
    url: "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D1%82%D1%8C%D0%BA%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Цивильск",
    title: "Цивильск",
    url: "https://ru.wikipedia.org/wiki/%D0%A6%D0%B8%D0%B2%D0%B8%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Цимлянск",
    title: "Цимлянск",
    url: "https://ru.wikipedia.org/wiki/%D0%A6%D0%B8%D0%BC%D0%BB%D1%8F%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Циолковский",
    title: "Циолковский (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A6%D0%B8%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Чадан",
    title: "Чадан",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B0%D0%B4%D0%B0%D0%BD",
  },
  {
    name: "Чайковский",
    title: "Чайковский (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Чапаевск",
    title: "Чапаевск",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B0%D0%BF%D0%B0%D0%B5%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Чаплыгин",
    title: "Чаплыгин (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B0%D0%BF%D0%BB%D1%8B%D0%B3%D0%B8%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Чебаркуль",
    title: "Чебаркуль (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%B1%D0%B0%D1%80%D0%BA%D1%83%D0%BB%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Чебоксары",
    title: "Чебоксары",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%B1%D0%BE%D0%BA%D1%81%D0%B0%D1%80%D1%8B",
  },
  {
    name: "Чегем",
    title: "Чегем (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%B3%D0%B5%D0%BC_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Чекалин",
    title: "Чекалин (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BA%D0%B0%D0%BB%D0%B8%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Челябинск",
    title: "Челябинск",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D1%8F%D0%B1%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Чердынь",
    title: "Чердынь",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%B4%D1%8B%D0%BD%D1%8C",
  },
  {
    name: "Черемхово",
    title: "Черемхово",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%B5%D0%BC%D1%85%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Черепаново",
    title: "Черепаново",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%B5%D0%BF%D0%B0%D0%BD%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Череповец",
    title: "Череповец",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%B5%D0%BF%D0%BE%D0%B2%D0%B5%D1%86",
  },
  {
    name: "Черкесск",
    title: "Черкесск",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BA%D0%B5%D1%81%D1%81%D0%BA",
  },
  {
    name: "Чёрмоз",
    title: "Чёрмоз",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D1%91%D1%80%D0%BC%D0%BE%D0%B7",
  },
  {
    name: "Черноголовка",
    title: "Черноголовка",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0",
  },
  {
    name: "Черногорск",
    title: "Черногорск",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Чернушка",
    title: "Чернушка (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D1%83%D1%88%D0%BA%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Черняховск",
    title: "Черняховск",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D1%8F%D1%85%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Чехов",
    title: "Чехов (Московская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%85%D0%BE%D0%B2_(%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Чистополь",
    title: "Чистополь",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C",
  },
  {
    name: "Чита",
    title: "Чита",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%82%D0%B0",
  },
  {
    name: "Чкаловск",
    title: "Чкаловск (Нижегородская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D0%BA%D0%B0%D0%BB%D0%BE%D0%B2%D1%81%D0%BA_(%D0%9D%D0%B8%D0%B6%D0%B5%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Чудово",
    title: "Чудово",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D1%83%D0%B4%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Чулым",
    title: "Чулым (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D1%83%D0%BB%D1%8B%D0%BC_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Чусовой",
    title: "Чусовой",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D1%83%D1%81%D0%BE%D0%B2%D0%BE%D0%B9",
  },
  {
    name: "Чухлома",
    title: "Чухлома",
    url: "https://ru.wikipedia.org/wiki/%D0%A7%D1%83%D1%85%D0%BB%D0%BE%D0%BC%D0%B0",
  },
  {
    name: "Шагонар",
    title: "Шагонар",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D0%B3%D0%BE%D0%BD%D0%B0%D1%80",
  },
  {
    name: "Шадринск",
    title: "Шадринск",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D0%B4%D1%80%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Шали",
    title: "Шали",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D0%BB%D0%B8",
  },
  {
    name: "Шарыпово",
    title: "Шарыпово",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%80%D1%8B%D0%BF%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Шарья",
    title: "Шарья",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%80%D1%8C%D1%8F",
  },
  {
    name: "Шатура",
    title: "Шатура",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%82%D1%83%D1%80%D0%B0",
  },
  {
    name: "Шахты",
    title: "Шахты (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%85%D1%82%D1%8B_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Шахунья",
    title: "Шахунья",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%85%D1%83%D0%BD%D1%8C%D1%8F",
  },
  {
    name: "Шацк",
    title: "Шацк (Рязанская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%86%D0%BA_(%D0%A0%D1%8F%D0%B7%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Шебекино",
    title: "Шебекино",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B5%D0%B1%D0%B5%D0%BA%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Шелехов",
    title: "Шелехов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B5%D0%BB%D0%B5%D1%85%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Шенкурск",
    title: "Шенкурск",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B5%D0%BD%D0%BA%D1%83%D1%80%D1%81%D0%BA",
  },
  {
    name: "Шилка",
    title: "Шилка (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D0%BB%D0%BA%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Шимановск",
    title: "Шимановск",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Шиханы",
    title: "Шиханы (Саратовская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%85%D0%B0%D0%BD%D1%8B_(%D0%A1%D0%B0%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Шлиссельбург",
    title: "Шлиссельбург",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D0%BB%D0%B8%D1%81%D1%81%D0%B5%D0%BB%D1%8C%D0%B1%D1%83%D1%80%D0%B3",
  },
  {
    name: "Шумерля",
    title: "Шумерля",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D1%83%D0%BC%D0%B5%D1%80%D0%BB%D1%8F",
  },
  {
    name: "Шумиха",
    title: "Шумиха (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D1%83%D0%BC%D0%B8%D1%85%D0%B0_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Шуя",
    title: "Шуя",
    url: "https://ru.wikipedia.org/wiki/%D0%A8%D1%83%D1%8F",
  },
  {
    name: "Щёкино",
    title: "Щёкино",
    url: "https://ru.wikipedia.org/wiki/%D0%A9%D1%91%D0%BA%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Щёлкино",
    title: "Щёлкино",
    url: "https://ru.wikipedia.org/wiki/%D0%A9%D1%91%D0%BB%D0%BA%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Щёлково",
    title: "Щёлково",
    url: "https://ru.wikipedia.org/wiki/%D0%A9%D1%91%D0%BB%D0%BA%D0%BE%D0%B2%D0%BE",
  },
  {
    name: "Щигры",
    title: "Щигры",
    url: "https://ru.wikipedia.org/wiki/%D0%A9%D0%B8%D0%B3%D1%80%D1%8B",
  },
  {
    name: "Щучье",
    title: "Щучье (Курганская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%A9%D1%83%D1%87%D1%8C%D0%B5_(%D0%9A%D1%83%D1%80%D0%B3%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Электрогорск",
    title: "Электрогорск",
    url: "https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Электросталь",
    title: "Электросталь",
    url: "https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%81%D1%82%D0%B0%D0%BB%D1%8C",
  },
  {
    name: "Электроугли",
    title: "Электроугли",
    url: "https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%83%D0%B3%D0%BB%D0%B8",
  },
  {
    name: "Элиста",
    title: "Элиста",
    url: "https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B8%D1%81%D1%82%D0%B0",
  },
  {
    name: "Энгельс",
    title: "Энгельс (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%AD%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Эртиль",
    title: "Эртиль (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%AD%D1%80%D1%82%D0%B8%D0%BB%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Югорск",
    title: "Югорск",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D0%B3%D0%BE%D1%80%D1%81%D0%BA",
  },
  {
    name: "Южа",
    title: "Южа",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D0%B6%D0%B0",
  },
  {
    name: "Южно-Сахалинск",
    title: "Южно-Сахалинск",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D0%B6%D0%BD%D0%BE-%D0%A1%D0%B0%D1%85%D0%B0%D0%BB%D0%B8%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Южно-Сухокумск",
    title: "Южно-Сухокумск",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D0%B6%D0%BD%D0%BE-%D0%A1%D1%83%D1%85%D0%BE%D0%BA%D1%83%D0%BC%D1%81%D0%BA",
  },
  {
    name: "Южноуральск",
    title: "Южноуральск",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D0%B6%D0%BD%D0%BE%D1%83%D1%80%D0%B0%D0%BB%D1%8C%D1%81%D0%BA",
  },
  {
    name: "Юрга",
    title: "Юрга",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D1%80%D0%B3%D0%B0",
  },
  {
    name: "Юрьев-Польский",
    title: "Юрьев-Польский",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D1%80%D1%8C%D0%B5%D0%B2-%D0%9F%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9",
  },
  {
    name: "Юрьевец",
    title: "Юрьевец",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D1%80%D1%8C%D0%B5%D0%B2%D0%B5%D1%86",
  },
  {
    name: "Юрюзань",
    title: "Юрюзань (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D1%80%D1%8E%D0%B7%D0%B0%D0%BD%D1%8C_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Юхнов",
    title: "Юхнов",
    url: "https://ru.wikipedia.org/wiki/%D0%AE%D1%85%D0%BD%D0%BE%D0%B2",
  },
  {
    name: "Ядрин",
    title: "Ядрин",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D0%B4%D1%80%D0%B8%D0%BD",
  },
  {
    name: "Якутск",
    title: "Якутск",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D0%BA%D1%83%D1%82%D1%81%D0%BA",
  },
  {
    name: "Ялта",
    title: "Ялта",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D0%BB%D1%82%D0%B0",
  },
  {
    name: "Ялуторовск",
    title: "Ялуторовск",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D0%BB%D1%83%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D1%81%D0%BA",
  },
  {
    name: "Янаул",
    title: "Янаул",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D0%BD%D0%B0%D1%83%D0%BB",
  },
  {
    name: "Яранск",
    title: "Яранск",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D1%80%D0%B0%D0%BD%D1%81%D0%BA",
  },
  {
    name: "Яровое",
    title: "Яровое",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D1%80%D0%BE%D0%B2%D0%BE%D0%B5",
  },
  {
    name: "Ярославль",
    title: "Ярославль",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C",
  },
  {
    name: "Ярцево",
    title: "Ярцево",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D1%80%D1%86%D0%B5%D0%B2%D0%BE",
  },
  {
    name: "Ясногорск",
    title: "Ясногорск (Тульская область)",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D1%81%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%A2%D1%83%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C)",
  },
  {
    name: "Ясный",
    title: "Ясный",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D1%81%D0%BD%D1%8B%D0%B9",
  },
  {
    name: "Яхрома",
    title: "Яхрома",
    url: "https://ru.wikipedia.org/wiki/%D0%AF%D1%85%D1%80%D0%BE%D0%BC%D0%B0",
  },
  {
    name: "Балаклава",
    title: "Балаклава",
    url: "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B0%D0%BA%D0%BB%D0%B0%D0%B2%D0%B0",
  },
  {
    name: "Зеленогорск",
    title: "Зеленогорск (Санкт-Петербург)",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE%D1%80%D1%81%D0%BA_(%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3)",
  },
  {
    name: "Зеленоград",
    title: "Зеленоград",
    url: "https://ru.wikipedia.org/wiki/%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D0%BE%D0%B3%D1%80%D0%B0%D0%B4",
  },
  {
    name: "Инкерман",
    title: "Инкерман",
    url: "https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%BA%D0%B5%D1%80%D0%BC%D0%B0%D0%BD",
  },
  {
    name: "Колпино",
    title: "Колпино",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D0%BF%D0%B8%D0%BD%D0%BE",
  },
  {
    name: "Красное Село",
    title: "Красное Село",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B5_%D0%A1%D0%B5%D0%BB%D0%BE",
  },
  {
    name: "Кронштадт",
    title: "Кронштадт",
    url: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%BE%D0%BD%D1%88%D1%82%D0%B0%D0%B4%D1%82",
  },
  {
    name: "Ломоносов",
    title: "Ломоносов (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BC%D0%BE%D0%BD%D0%BE%D1%81%D0%BE%D0%B2_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Московский",
    title: "Московский (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Павловск",
    title: "Павловск (Санкт-Петербург)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D1%81%D0%BA_(%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3)",
  },
  {
    name: "Петергоф",
    title: "Петергоф",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B3%D0%BE%D1%84",
  },
  {
    name: "Пушкин",
    title: "Пушкин (город)",
    url: "https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD_(%D0%B3%D0%BE%D1%80%D0%BE%D0%B4)",
  },
  {
    name: "Сестрорецк",
    title: "Сестрорецк",
    url: "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%81%D1%82%D1%80%D0%BE%D1%80%D0%B5%D1%86%D0%BA",
  },
  {
    name: "Троицк",
    title: "Троицк (Москва)",
    url: "https://ru.wikipedia.org/wiki/%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA_(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0)",
  },
  {
    name: "Щербинка",
    title: "Щербинка",
    url: "https://ru.wikipedia.org/wiki/%D0%A9%D0%B5%D1%80%D0%B1%D0%B8%D0%BD%D0%BA%D0%B0",
  },
];
