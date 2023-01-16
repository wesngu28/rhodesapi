import fetch from 'node-fetch';
import { parse } from 'node-html-parser'

type stats = {
  base: {},
  e0max: {},
  e1max?: {},
  e2max?: {},
}

export const getStatistics = async (url: string) => {
  try{
    const response = await fetch(url);
    const text = await response.text();
    const html = parse(text);
    const scripts = html.querySelectorAll('script')
    const stats = [];
    for (const script of scripts) {
      if ((script).text.includes('myStats')) {
        const removals = script.text.substring(0, script.text.indexOf('myStats') + 11)
        const secremovals = script.text.substring(script.text.indexOf('var summon_stats'), script.text.length)
        let formattedText = script.text.replace(removals, '');
        formattedText = formattedText.replace(secremovals, '')
        formattedText = formattedText.substring(0, formattedText.length - 3)
        formattedText = parse(formattedText).rawText.replaceAll('\t', '')
        formattedText = formattedText.replaceAll('"', '')
        formattedText = formattedText.replaceAll(',', '')
        let ne = formattedText.substring(0, formattedText.indexOf('}') + 1)
        formattedText = formattedText.replace(ne, '')
        const [, ...rest] = ne.split('\n')
        const statDict = {
          hp: rest[4].substring(rest[4].indexOf(' ') + 1, rest[4].length),
          atk: rest[5].substring(rest[5].indexOf(' ') + 1, rest[5].length),
          def: rest[6].substring(rest[6].indexOf(' ') + 1, rest[6].length),
          resist: rest[2].substring(rest[1].indexOf(' ') + 1, rest[1].length),
          deploy: html.querySelectorAll('.other-stat-cell .other-stat-value-cell .effect-description')[1].text.replaceAll('\n', ''),
          cost: rest[4].substring(rest[2].indexOf(' ') + 1, rest[2].length),
          interval: html.querySelectorAll('.other-stat-cell .other-stat-value-cell .effect-description')[4].text.replaceAll('\n', ''),
          block: rest[7].substring(rest[7].indexOf(' ' + 1), rest[7].length)
        }
        stats.push(statDict)
        let max = formattedText.substring(0, formattedText.indexOf('}') + 1)
        formattedText = formattedText.replace(max, '')
        const [, ...rests] = max.split('\n')
        const maxDict = {
          hp: rests[2].substring(rests[2].indexOf(' ') + 1, rests[2].length),
          atk: rests[3].substring(rests[3].indexOf(' ') + 1, rests[3].length),
          def: rests[4].substring(rests[4].indexOf(' ') + 1, rests[4].length),
          block: rests[5].substring(rests[5].indexOf(' ') + 1, rests[5].length),
        }
        stats.push(maxDict)
        formattedText = formattedText.substring(2, formattedText.length)
        if (formattedText.includes('e1')) {
          formattedText = formattedText.replace(formattedText.substring(0, formattedText.indexOf('Max')), '')
          console.log(formattedText)
          let ne = formattedText.substring(formattedText.indexOf('Max') + 1, formattedText.indexOf('}') + 1)
          console.log(ne)
          formattedText = formattedText.replace(ne, '')
          const [, ...rest] = ne.split('\n')
          const statDict = {
            hp: rest[1].substring(rest[1].indexOf(' ') + 1, rest[1].length),
            atk: rest[2].substring(rest[2].indexOf(' ') + 1, rest[2].length),
            def: rest[3].substring(rest[3].indexOf(' ') + 1, rest[3].length),
            block: rest[4].substring(rest[4].indexOf(' ') + 1, rest[4].length),
          }
          stats.push(statDict)
          formattedText = formattedText.substring(1, formattedText.length)
        }
        if (formattedText.includes('e2')) {
          formattedText = formattedText.replace(formattedText.substring(0, formattedText.indexOf('Max')), '')
          console.log(formattedText)
          let ne = formattedText.substring(formattedText.indexOf('Max') + 1, formattedText.indexOf('}') + 1)
          console.log(ne)
          formattedText = formattedText.replace(ne, '')
          const [, ...rest] = ne.split('\n')
          const statDict = {
            hp: rest[1].substring(rest[1].indexOf(' ') + 1, rest[1].length),
            atk: rest[2].substring(rest[2].indexOf(' ') + 1, rest[2].length),
            def: rest[3].substring(rest[3].indexOf(' ') + 1, rest[3].length),
            block: rest[4].substring(rest[4].indexOf(' ') + 1, rest[4].length),
          }
          stats.push(statDict)
          formattedText = formattedText.substring(1, formattedText.length)
        }
      }
    }
    const statistics: stats = {
      base: stats[0],
      e0max: stats[1]
    }
    if(stats[2].hp) {
      statistics['e1max'] = stats[2]
    }
    if(stats[3].hp) {
      statistics['e2max'] = stats[3]
    }
    return statistics;
  } catch (err) {
    return (
      {
        base: {error: "something went wrong, most likely operator does not have stats yet on gp"},
        e0max: {error: "something went wrong, most likely operator does not have stats yet on gp"},
        e1max: {error: "something went wrong, most likely operator does not have stats yet on gp"},
        e2max: {error: "something went wrong, most likely operator does not have stats yet on gp"},
      }
    )
  }
}