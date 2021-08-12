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


export type Parser = () => Promise<Mirrorz>;
export default {
  "lzu"     : lzu,
  "nju"     : nju,
  "neusoft" : neusoft,
  "hust"    : hust,
  "tuna"    : tuna,
  "bfsu"    : bfsu,
  "nano"    : nano,
  "neo"     : neo,
  "hit"     : hit,
  "cqu"     : cqu,
  "xjtu"    : xjtu,
  "neu"     : neu,
  "nyist"   : nyist,
  "scau"    : scau,
  "zju"     : zju,
  "pku"     : pku,
  "byrio"   : byrio,
  "cqupt"   : cqupt,
  "ynuosa"  : ynuosa,
  "xtom-hk" : xtom_hk,
  "xtom"    : xtom,
  "xtom-de" : xtom_de,
  "xtom-nl" : xtom_nl,
  "xtom-ee" : xtom_ee,
  "njupt"   : njupt,
  "wsyu"    : wsyu,
};
