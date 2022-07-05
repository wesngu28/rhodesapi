import { Page } from "puppeteer";
import { load } from 'cheerio';
import fetch from "node-fetch";

export const getCosts = async (page: Page) => {
  const costNames = await page.evaluate(()=>{
    const costList: string[] = [];
    let costLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('#overall-cost a');
    costLinks.forEach(element => {
        costList.push(element.href);
      }
    );
    return costList;
  })
  const costQuantity = await page.evaluate(()=>{
    const quantity: string[] = [];
    let quantities = document.querySelectorAll('#overall-cost .item-qty > span');
    quantities.forEach(element => {
      quantity.push(element.textContent!);
    });
    return quantity;
  })
  for (let i = 0; i < costNames.length; i++) {
    const url = costNames[i];
    const test = await fetch(url);
    const $ = load(await test.text());
    const name = $('#page-title > h1').text();
    costNames[i] = name;
  }
  const costTable: {[key: string]: string} = {};
  costNames.forEach((costNames, i) => costTable[costNames] = costQuantity[i]);
  const doCostsExist = Object.keys(costTable);
  if(doCostsExist.length === 0) {
    costTable['Costs'] = 'Not provided in Gamepress';
  }
  return costTable;
}