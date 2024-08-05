const tunasync = require("./tunasync");
const options = require("./options");
const isoinfo = require("./isoinfo");

module.exports = async function () {
  const site = await (await fetch("https://cors.quickso.cn/?https://mirror.nyist.edu.cn/static/site.json")).json();
  let mirrors = await tunasync("https://cors.quickso.cn/?https://mirror.nyist.edu.cn/static/tunasync.json");
  mirrors = await options("https://cors.quickso.cn/?https://mirror.nyist.edu.cn/static/js/options.json", mirrors);
  const info = await isoinfo("https://cors.quickso.cn/?https://mirror.nyist.edu.cn/static/status/isoinfo.json");
  
  return {
    site,
    info,
    mirrors,
  }
};
