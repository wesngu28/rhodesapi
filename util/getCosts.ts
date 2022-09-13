import fetch from 'node-fetch';
import { parse } from 'node-html-parser'

const BASE = 'https://gamepress.gg/'

export const getCosts = async (url: string) => {
  const response = await fetch(url);
  const text = await response.text();
  const html = parse(text);
  const costList: {[key: string]: number }= {};
  let onetoseven = html.querySelectorAll('.skill-material-cost17 a');
  let onetosevenqty = html.querySelectorAll('.skill-material-cost17 .material-quantity');
  onetoseven.forEach((element, idx) => {
      const newElement = BASE + element.getAttribute('href');
      if(!Object.keys(costList).includes(newElement)) {
          costList[newElement] = Number(onetosevenqty[idx].text.replace('x', ''))
      } else {
          costList[newElement] = costList[newElement] + Number(onetosevenqty[idx].text.replace('x', ''))
      }
    }
  );
  let m1tom3 = html.querySelectorAll('.skill-material-cost810 a');
  let m1tom3qty = html.querySelectorAll('.skill-material-cost810 .material-quantity');
  m1tom3.forEach((element, idx) => {
      const newElement = BASE + element.getAttribute('href');
      if(!Object.keys(costList).includes(newElement)) {
          costList[newElement] = Number(m1tom3qty[idx].text.replace('x', ''))
      } else {
          costList[newElement] = costList[newElement] + Number(m1tom3qty[idx].text.replace('x', ''))
      }
    }
  );
  let rankcost = html.querySelectorAll('.table-3 a');
  let rankcostqty = html.querySelectorAll('.table-3 .material-quantity');
  rankcost.forEach((element, idx) => {
      const newElement = BASE + element.getAttribute('href');
      if(!Object.keys(costList).includes(newElement)) {
          costList[newElement] = Number(rankcostqty[idx].text.replace('x', ''))
      } else {
          costList[newElement] = costList[newElement] + Number(rankcostqty[idx].text.replace('x', ''))
      }
    }
  );
  const newKeys: string[] = [];
  for (let i = 0; i < Object.keys(costList).length; i++) {
      const test = await fetch(Object.keys(costList)[i]);
      const text = await test.text();
      const html = parse(text);
      const name = html.querySelector('#page-title > h1')!.text;
      newKeys.push(name)
  }
  console.log(newKeys)
  Object.keys(costList).forEach((key, idx) => {
      costList[newKeys[idx]] = costList[key]
      delete costList[key]
  });
  return costList;
}