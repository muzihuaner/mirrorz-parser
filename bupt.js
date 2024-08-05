const tunasync = require("./tunasync");

module.exports = async function (siteUrl) {
  const site = await (await fetch(siteUrl)).json();
  const mirrors = await tunasync("https://cors.quickso.cn/?https://mirrors.bupt.edu.cn/static/tunasync.json");

  return {
    site,
    info: [],
    mirrors,
  }
};
