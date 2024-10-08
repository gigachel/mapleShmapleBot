import fs from "fs";
import { InputFile } from "grammy";

export async function getRandomTibetFox() {
  let { length: jpgCount } = await fs.readdirSync(import.meta.dirname);

  jpgCount = jpgCount - 1; // не считаем файл tibetFox.js

  const randomNum = random(1, jpgCount);

  return new InputFile(import.meta.dirname + "/" + randomNum + ".jpg");
}

export function random(min, max) {
  if (min === undefined && max === undefined) {
    return Math.random();
  } else if (max === undefined) {
    max = min;
    min = 0;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются
}
