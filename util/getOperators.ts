import { load } from 'cheerio';
import fs from 'fs';
import parse from 'node-html-parser';

export async function requester() {
  const operatorsHTML = await fetch('https://gamepress.gg/arknights/tools/interactive-operator-list#tags=null##stats');
  const operators = parse(await operatorsHTML.text());
  const data = operators.querySelectorAll('.operator-title-actual').map(operator => {
    let name = operator.textContent.replaceAll('(', '')
      .replaceAll(')', '')
      .replace(/(?<!-)\bthe\b(?!\s*-)*/gi, '')
      .replaceAll("'", '')
      .replaceAll('.', '')
      .replaceAll(' ', '-')
      .replaceAll('---', '-')
      .replaceAll('--', '-')
      .replaceAll('ł', 'l')
      .replaceAll('ë', 'e')
    return name
  });
  const operatorJSON = JSON.stringify(data, null, '\t');
  fs.writeFile('./operators.json',  operatorJSON, err => {
  if (err) { console.log("Error writing to file.")}});
  return data;
}
