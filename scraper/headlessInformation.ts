import puppeteer from 'puppeteer';
import { load } from 'cheerio';
import { sleep } from './sleep';

export const headlessInformation = async (url: string) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox','--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080});
  await page.goto(url);
  await sleep(1000);
  const statsBuild = [];
  const stats = [];
  const buttons = await page.evaluate(() => {
    const buttonCount = document.querySelectorAll('.rank-button');
    return buttonCount.length;
  })
  for (let i = 0; i <= buttons; i++) {
    if (i > 0) {
      const buttons = await page.$(`.rank-select button:nth-child(${i})`);
      if (buttons) {
        await buttons.click();
        await page.waitForSelector("#arrow-right");
        let [range] = await page.$x('//*[@id="myRange"]');
        let rangeMax = await range.getProperty('max');
        rangeMax = await range.jsonValue();
        const button = await page.$('#arrow-right')
        for (let i = 0; i < Number(rangeMax); i++) {
          if (button) {
            await button.click();
          }
        }
      }
    }
    await page.waitForSelector('#stat-hp');
    const stat = await page.evaluate(() => {
      const statDict = {
        hp: document.querySelector('#stat-hp')!.textContent,
        atk: document.querySelector('#stat-atk')!.textContent,
        def: document.querySelector('#stat-def')!.textContent,
        resist: document.querySelector('#arts-resist')!.textContent,
        redeploy: document.querySelector('.other-stat-value-cell:nth-child(2) > .effect-description')!.textContent!.replace(/\n/g, ''),
        cost: document.querySelector('#operator-cost ')!.textContent,
        block: document.querySelector('#operator-block')!.textContent,
        interval: document.querySelector('.other-stat-value-cell:nth-child(5) > .effect-description')!.textContent!.replace(/\n/g, '')
      }
      return statDict;
    })
    stats.push(stat);
  }
  const statistics = {
    base: stats[0],
    e0max: stats[1],
    e1max: stats[2],
    e2max: stats[3]
  }
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

  statsBuild.push(costTable);
  statsBuild.push(statistics);
  await browser.close();
  return statsBuild;
}