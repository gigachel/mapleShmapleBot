export async function dateLeftConvers(conversation, ctx) {
  let dateString = ctx.match || "";

  if (!dateString || !dateString.trim()) {
    await ctx.reply("Напиши дату в формате 01.01.2024");
    const { message } = await conversation.waitFor(":text");
    dateString = message.text || "";
  }

  const html = downCounter(dateString);

  return await ctx.reply(html, { parse_mode: "HTML" });
}

function downCounter(dateString) {
  const date = new Date(dateString);
  let dateLeftString = "";

  // invalid
  if (!(date > 0)) {
    return "Какая-то странная дата...";
  }

  const dateLeft = (date - new Date()) / 1000;
  const dateLeftAbs = Math.abs(dateLeft);

  const days = Math.floor(dateLeftAbs / 86400);
  const hours = Math.floor((dateLeftAbs % 86400) / 3600);
  const minutes = Math.floor((dateLeftAbs % 3600) / 60);
  const seconds = Math.floor(dateLeftAbs % 60);

  dateLeftString += dateLeft > 0 ? "Осталось" : "Прошло";

  if (days > 0) dateLeftString += " " + days + " " + getNoun(days, ["день", "дня", "дней"]);
  if (hours > 0) dateLeftString += " " + hours + " " + getNoun(hours, ["час", "часа", "часов"]);
  if (minutes > 0) dateLeftString += " " + minutes + " " + getNoun(minutes, ["минута", "минуты", "минут"]);
  if (seconds > 0) dateLeftString += " " + seconds + " " + getNoun(seconds, ["секунда", "секунды", "секунд"]);

  return dateLeftString;
}

function getNoun(t, ...nouns) {
  const [noun1, noun2, noun5] = Array.isArray(nouns[0]) ? nouns[0] : nouns;
  t = Math.abs(t) % 100;
  return t >= 5 && 20 >= t ? noun5 : ((t %= 10), 1 == t ? noun1 : t >= 2 && 4 >= t ? noun2 : noun5);
}
