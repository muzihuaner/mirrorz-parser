const lzu = require("./lzu");
const nju = require("./nju");
const neusoft = require("./neusoft");
const hust = require("./hust");
const tuna = require("./tuna");
const bfsu = require("./bfsu");
const nano = require("./nano");
const neo = require("./neo");
const hit = require("./hit");
const cqu = require("./cqu");
const xjtu = require("./xjtu");
const neu = require("./neu");
const nyist = require("./nyist");
const scau = require("./scau");
const zju = require("./zju");
const pku = require("./pku");
const byrio = require("./byrio");
const cqupt = require("./cqupt");
const ynuosa = require("./ynuosa");
const xtom_hk = require("./xtom-hk");
const xtom = require("./xtom");
const xtom_de = require("./xtom-de");
const xtom_nl = require("./xtom-nl");
const xtom_ee = require("./xtom-ee");
const njupt = require("./njupt");
const wsyu = require("./wsyu");

const config = require('./config.json')

const site = (abbr) => config.url + '/static/json/site/' + abbr + '.json';

module.exports = {
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
