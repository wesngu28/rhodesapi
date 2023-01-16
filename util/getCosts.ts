import fetch from 'node-fetch';
import { parse } from 'node-html-parser'

const BASE = 'https://gamepress.gg/'

export const getCosts = async (url: string) => {
  try {
    const response = await fetch(url);
    const text = await response.text();
    const html = parse(text);
    let costList: {[key: string]: number }= {};
    let onetoseven = html.querySelectorAll('.skill-material-cost17 a');
    let onetosevenqty = html.querySelectorAll('.skill-material-cost17 .material-quantity');
    costList = getItemsAndQuantity(costList, onetoseven, onetosevenqty);
    let m1tom3 = html.querySelectorAll('.skill-material-cost810 a');
    let m1tom3qty = html.querySelectorAll('.skill-material-cost810 .material-quantity');
    costList = getItemsAndQuantity(costList, m1tom3, m1tom3qty);
    let rankcost = html.querySelectorAll('.table-3 a');
    let rankcostqty = html.querySelectorAll('.table-3 .material-quantity');
    costList = getItemsAndQuantity(costList, rankcost, rankcostqty);
    const newKeys: string[] = [];
    for (let i = 0; i < Object.keys(costList).length; i++) {
        const test = await fetch(Object.keys(costList)[i]);
        const text = await test.text();
        const html = parse(text);
        const name = html.querySelector('#page-title > h1')!.text;
        newKeys.push(name)
    }
    Object.keys(costList).forEach((key, idx) => {
        costList[newKeys[idx]] = costList[key]
        delete costList[key]
    });
    return costList;
  } catch (err) {
    return ( { error: 0})
  }
}

function getItemsAndQuantity(masterList: {[key: string]: number }, itemList: any[], qtyList: any[]) {
  const costList = masterList;
  itemList.forEach((element, idx) => {
      const newElement = BASE + element.getAttribute('href');
      if(!Object.keys(costList).includes(newElement)) {
          costList[newElement] = Number(qtyList[idx].text.replace('x', ''))
      } else {
          costList[newElement] = costList[newElement] + Number(qtyList[idx].text.replace('x', ''))
      }
    }
  );
  return costList;
}
