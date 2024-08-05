const tunasync = require("./tunasync");
const options = require("./options");
const isoinfo = require("./isoinfo");

module.exports = async function (siteUrl) {
  const site = await (await fetch(siteUrl)).json();
  let mirrors = await tunasync("https://cors.quickso.cn/?https://mirrors.tuna.tsinghua.edu.cn/static/tunasync.json");
  mirrors = await options("https://cors.quickso.cn/?https://mirrors.tuna.tsinghua.edu.cn/static/js/options.json", mirrors);
  const info = await isoinfo("https://cors.quickso.cn/?https://mirrors.tuna.tsinghua.edu.cn/static/status/isoinfo.json");

  return {
    site,
    info,
    mirrors,
  }
};
