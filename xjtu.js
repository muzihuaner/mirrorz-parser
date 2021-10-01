const tunasync = require("./tunasync");

module.exports = async function (siteUrl) {
  const site = await (await fetch(siteUrl)).json();
  let mirrors = await tunasync("https://mirrors.xjtu.edu.cn/api/status.json");
  mirrors = mirrors.map((item) => ({ ...item, url: item.url + "/" }));

  return {
    site,
    info: [],
    mirrors,
  }
};
