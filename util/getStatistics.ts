import { Page } from 'playwright-chromium';

export const getStatistics = async (page: Page) => {
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
        await page.evaluate(()=> {
          let range = document.getElementById('myRange')!;
          let rangeMax = range.getAttribute('max')!;
          const button = document.getElementById('arrow-right');
          for (let i = 0; i < Number(rangeMax); i++) {
            if (button) {
              button.click();
            }
          }
        })
      }
    }
    await page.waitForSelector('#stat-hp');
    const stat = await page.evaluate(() => {
      const statDict = {
        hp: document.querySelector('#stat-hp')!.textContent!,
        atk: document.querySelector('#stat-atk')!.textContent!,
        def: document.querySelector('#stat-def')!.textContent!,
        resist: document.querySelector('#arts-resist')!.textContent!,
        redeploy: document.querySelector('.other-stat-value-cell:nth-child(2) > .effect-description')!.textContent!.replace(/\n/g, ''),
        cost: document.querySelector('#operator-cost ')!.textContent!,
        block: document.querySelector('#operator-block')!.textContent!,
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
  return statistics;
}