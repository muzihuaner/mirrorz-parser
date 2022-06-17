const tunasync = require("./tunasync");
const isoinfo = require("./isoinfo");

module.exports = async function (siteUrl) {
  const site = await (await fetch(siteUrl)).json();

  const mirrors = await tunasync("https://mirrors.xtom.au/static/tunasync.json");
  const info = await isoinfo("https://mirrors.xtom.au/static/status/isoinfo.json");

  return {
    site,
    info,
    mirrors,
  }
};
