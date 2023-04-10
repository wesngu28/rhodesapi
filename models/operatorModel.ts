import mongoose from "mongoose";

export interface operatorInterface {
  _id: string;
  name: string;
  range: Array<{ elite: string; range: ("attackable" | "unit" | "null")[][] }>;
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
  statistics:
    | { [key: string]: { hp: string; atk: string; def: string; block: string } }
    | {
        base: { error: string };
        e0max: { error: string };
        e1max: { error: string };
        e2max: { error: string };
      };
  trait: string;
  costs: { [key: string]: number };
  potential: Array<{ name: string; value: string }>;
  trust: Array<{ name: string; value: string }>;
  talents: Array<
    {name: string, variation: Array<{
      description: string, elite: string, potential: string, moduleName?: string, moduleLevel?: number
    }>
  }>;
  skills: Array<{
    name: string;
    levelVariations: {
        level: string | number;
        description: string;
        spCost: string;
        initialSP: string;
        duration: string;
        range: string | ("attackable" | "unit" | "null")[][];
    }[];
    skillCharge: string;
    skillActivation: string;
  }>;
  module: Array<{[key: string]: any;}>;
  base: Array<{name: string; level: string; effects: string; building: string;}>;
  headhunting: string;
  recruitable: string;
  art: {
    [key: string]:
      | string
      | {
          link: string;
          line: string;
        };
  };
  availability: string;
  url: string;
  dateAdded?: Date;
}

type OperatorModel = mongoose.Model<operatorInterface, {}>;

const OperatorSchema = new mongoose.Schema<operatorInterface, OperatorModel>({
    _id: String,
    name: String,
    range: [{}],
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
    trust: [{}],
    talents: [{}],
    skills: [{}],
    module: [{}],
    base: [{}],
    headhunting: String,
    recruitable: String,
    art: {},
    availability: String,
    url: String,
    dateAdded: {
      type: Date,
      default: () => Date.now(),
    },
  },{
    collation: { locale: "en", strength: 2 },
  }
);

export default mongoose.model<operatorInterface, OperatorModel>(
  "Operator",
  OperatorSchema
);
