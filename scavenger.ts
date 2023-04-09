import fs from "fs";
import { neuralConnect } from "./models/connect";
import Operator, { operatorInterface } from "./models/operatorModel";
import dotenv from "dotenv";
dotenv.config();
import { getStaticInformation } from "./util/getStaticInformation";

const BASE_URL = "https://gamepress.gg/arknights/operator/";

scavenger();

async function scavenger() {
  await neuralConnect();
  console.log("Starting to scrape:");
  let operators = fs.readFileSync("operators.json", "utf8");
  operators = JSON.parse(operators);
  for (let i = 0; i < operators.length; i++) {
    console.log(
      `Currently scraping information for ${operators[i]}. ${i + 1}/${
        operators.length
      }`
    );
    const findOperator = await Operator.findOne({
      _id: operators[i],
    });
    if (findOperator && findOperator.checkDate() === false) {
      console.log(`${operators[i]} already in database`);
    } else if (findOperator && findOperator.checkDate()) {
      const findOperator = await Operator.findOne({
        _id: operators[i],
      });
      if (findOperator && findOperator.checkDate()) {
        const updateInfo = await getStaticInformation(BASE_URL + operators[i]);
        const updateOperator = await Operator.replaceOne(
          {
            name: updateInfo.name,
          },
          updateInfo
        );
      }
    } else {
      const createdOperator: operatorInterface = await getStaticInformation(
        BASE_URL + operators[i]
      );
      // fs.writeFile('./' + operators[i] + '.json',  JSON.stringify(createdOperator), err => {
      // if (err) { console.log("Error writing to file.")}});
      await Operator.create(createdOperator);
      console.log(`${operators[i]} recruited`);
    }
  }
}
