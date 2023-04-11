import fetch from 'node-fetch';
import { parse } from 'node-html-parser'
const BASE = 'https://gamepress.gg/'

export const getCosts = async (url: string) => {
    const itemRes = await fetch(
      "https://raw.githubusercontent.com/wesngu28/rhodesapi/main/util/itemMapping.json"
    )
    const itemMap: {[key: string]: string} = await itemRes.json()
    const response = await fetch(url);
    const text = await response.text();
    const html = parse(text);
    let costList: Array<{name: string, amount: number}> = [];
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
        if (Object.values(itemMap).includes(Object.values(costList)[i].name)) {
          const matchingKey = Object.keys(itemMap).find(key => itemMap[key] === Object.values(costList)[i].name);
          newKeys.push(matchingKey!)
        } else {
          const test = await fetch(Object.keys(costList)[i]);
          const text = await test.text();
          const html = parse(text);
          const name = html.querySelector('#page-title > h1')!.text;
          newKeys.push(name)
        }
    }
    Object.keys(costList).forEach((key, idx) => {
        costList[idx].name = newKeys[idx]
    });
    return costList;
}

function getItemsAndQuantity(masterList: Array<{name: string, amount: number}>, itemList: any[], qtyList: any[]) {
  itemList.forEach((element, idx) => {
      const newElement = BASE + element.getAttribute('href');
      if(masterList.length === 0 || !masterList.some(obj => obj.name === newElement)) {
        masterList.push({
          name: newElement,
          amount: Number(qtyList[idx].text.replace('x', ''))
        })
      } else {
        const objIndex = masterList.findIndex(obj => obj.name === newElement);
        masterList[objIndex].amount += Number(qtyList[idx].text.replace('x', ''));
      }
    }
  );
  return masterList;
}