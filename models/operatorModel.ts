import mongoose from 'mongoose';

type stats = {
  hp: string;
  atk: string;
  def: string;
  resist: string;
  redeploy: string;
  cost: string;
  block: string;
  interval: string;
}

type skill = {
  name: string;
  spcost: string;
  initialSP: string;
  chargeType: string;
  skillActivation: string;
  skillDescription: string;
}

type module = {
  name: string;
  level: string;
  trust: string;
  availability: string;
  trait: string;
  missions: string[];
}

type base = {
  name: string;
  level: string;
  effects: string;
  building: string;
}

export interface operatorInterface {
  _id: string;
  name: string;
  rarity: number;
  alter: string;
  artist: string;
  va: string;
  biography: string;
  description: string;
  quote: string;
  voicelines: { [key: string]: string };
  lore: { [key: string]: string };
  affiliation: Array<string>;
  class: Array<string>;
  tags: Array<string>;
  statistics: {base: { [key: string]: string }, e0max: { [key: string]: string }, e1max?: { [key: string]: string }, e2max?: { [key: string]: string }};
  trait: string;
  costs: {[key: string]: number};
  potential: Array<{name: string, value: string;}>;
  trust: { [key: string]: string };
  talents: Array<{name: string, value: string;}>;
  skills: Array<skill>;
  module: module;
  base: Array<base>;
  headhunting: string;
  recruitable: string;
  art: {[key: string]: string};
  availability: string;
  url: string;
  dateAdded?: Date;
}

interface OperatorMethods {
  checkDate(): Boolean;
}

type OperatorModel = mongoose.Model<operatorInterface, {}, OperatorMethods>;

const OperatorSchema = new mongoose.Schema<operatorInterface, OperatorModel, OperatorMethods>({
  _id: String,
  name: String,
  rarity: Number,
  alter: String,
  artist: String,
  va: String,
  biography: String,
  description: String,
  quote: String,
  voicelines: {},
  lore: {},
  affiliation: [],
  class: [],
  tags: [],
  statistics: {},
  trait: String,
  costs: {},
  potential: [{}],
  trust: {},
  talents: [{}],
  skills: [{}],
  module: {},
  base: [{}],
  headhunting: String,
  recruitable: String,
  art: {},
  availability: String,
  url: String,
  dateAdded: {
    type: Date,
    default: () => Date.now()
  }},{
    collation: { locale: 'en', strength: 2 },
},);

OperatorSchema.method('checkDate', function checkDate() {
  const date1 = this.dateAdded.getTime();
  const date2 = Date.now();
  const timeDiff = (date2 - date1)/(1000*3600*24);
  if(timeDiff > 7) {
    return true;
  } else {
    return false;
  }
});

export default mongoose.model<operatorInterface, OperatorModel>('Operator', OperatorSchema);