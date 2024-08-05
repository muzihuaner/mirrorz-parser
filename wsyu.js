const isoinfo = require("./isoinfo");

module.exports = async function () {
  const mirrorz = await (await fetch("https://cors.quickso.cn/?https://mirrors.wsyu.edu.cn/.mirrorz/mirrorz.json")).json();
  const site = mirrorz["site"];
  const mirrors = mirrorz["mirrors"];
  const info = await isoinfo("https://cors.quickso.cn/?https://mirrors.wsyu.edu.cn/.mirrorz/info.json");

  return {
    site,
    info,
    mirrors,
  }
};
