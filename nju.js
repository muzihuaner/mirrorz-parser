const tunasync = require("./tunasync");
const options = require("./options");
const isoinfo = require("./isoinfo");

module.exports = async function () {
  const site = await (await fetch("https://mirrors.nju.edu.cn/.mirrorz/site.json")).json();
  const mirrors = await tunasync("https://mirrors.nju.edu.cn/.mirrorz/tunasync.json");
  const info = await isoinfo("https://mirror.nju.edu.cn/.mirrorz/iso.json");

  return {
    site,
    info,
    mirrors,
  }
};
