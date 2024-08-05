const tunasync = require("./tunasync");

module.exports = async function (siteUrl) {
  const site = await (await fetch(siteUrl)).json();
  const mirrors = await tunasync("https://cors.quickso.cn/?https://mirrors.jcut.edu.cn/jobs");

  return {
      site,
      info: [],
      mirrors,
  }
};
