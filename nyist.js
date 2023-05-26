const tunasync = require("./tunasync");

module.exports = async function () {
  const site = await (await fetch("https://mirror.nyist.edu.cn/static/site.json")).json();
  const mirrors = await tunasync("https://mirror.nyist.edu.cn/static/tunasync.json");

  return {
    site,
    info: [],
    mirrors,
  }
};
