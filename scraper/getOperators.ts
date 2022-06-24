import { load } from 'cheerio';
import fs from 'fs';
import fetch from 'node-fetch';

export async function requester() {
  const test = await fetch('https://gamepress.gg/arknights/tools/interactive-operator-list#tags=null##stats');
  const $ = load(await test.text());
  const data: string[] = [];
  $('.operator-title-actual').each(function(){
    let name = $(this).text().replaceAll('(', '');
    name = name.replaceAll(')', '');
    name = name.replaceAll('the', '');
    name = name.replaceAll('The', '');
    name = name.replaceAll("'", '');
    name = name.replaceAll('.', '');
    name = name.replaceAll(' ', '-');
    name = name.replaceAll('---', '-');
    name = name.replaceAll('--', '-');
    if(name === 'Absin') {
      name = 'Absinthe';
    }
    data.push(name);
  });
  const operatorJSON = JSON.stringify(data, null, '\t');
  fs.writeFile('./operators.json',  operatorJSON, err => {
    if (err) { console.log("Error writing to file.")}});
}
