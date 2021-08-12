import { Mirrorz } from "../schema";

import lzu from "./lzu";
import nju from "./nju";
import neusoft from "./neusoft";
import hust from "./hust";
import tuna from "./tuna";
import bfsu from "./bfsu";
import nano from "./nano";
import neo from "./neo";
import hit from "./hit";
import cqu from "./cqu";
import xjtu from "./xjtu";
import neu from "./neu";
import nyist from "./nyist";
import scau from "./scau";
import zju from "./zju";
import pku from "./pku";
import byrio from "./byrio";
import cqupt from "./cqupt";
import ynuosa from "./ynuosa";
import xtom_hk from "./xtom-hk";
import xtom from "./xtom";
import xtom_de from "./xtom-de";
import xtom_nl from "./xtom-nl";
import xtom_ee from "./xtom-ee";
import njupt from "./njupt";
import wsyu from "./wsyu";

const config = require('./config.json')

const site = (abbr: string) => config.url + '/static/json/site/' + abbr + '.json';

export type Parser = () => Promise<Mirrorz>;
export default {
  "lzu"     : () => lzu     (site("lzu"     )),
  "nju"     :       nju                       ,
  "neusoft" : () => neusoft (site("neusoft" )),
  "hust"    : () => hust    (site("hust"    )),
  "tuna"    : () => tuna    (site("tuna"    )),
  "bfsu"    : () => bfsu    (site("bfsu"    )),
  "nano"    : () => nano    (site("nano"    )),
  "neo"     : () => neo     (site("neo"     )),
  "hit"     : () => hit     (site("hit"     )),
  "cqu"     : () => cqu     (site("cqu"     )),
  "xjtu"    : () => xjtu    (site("xjtu"    )),
  "neu"     : () => neu     (site("neu"     )),
  "nyist"   : () => nyist   (site("nyist"   )),
  "scau"    : () => scau    (site("scau"    )),
  "zju"     : () => zju     (site("zju"     )),
  "pku"     : () => pku     (site("pku"     )),
  "byrio"   : () => byrio   (site("byrio"   )),
  "cqupt"   : () => cqupt   (site("cqupt"   )),
  "ynuosa"  : () => ynuosa  (site("ynuosa"  )),
  "xtom-hk" : () => xtom_hk (site("xtom-hk" )),
  "xtom"    : () => xtom    (site("xtom"    )),
  "xtom-de" : () => xtom_de (site("xtom-de" )),
  "xtom-nl" : () => xtom_nl (site("xtom-nl" )),
  "xtom-ee" : () => xtom_ee (site("xtom-ee" )),
  "njupt"   : () => njupt   (site("njupt"   )),
  "wsyu"    :       wsyu                      ,
};
