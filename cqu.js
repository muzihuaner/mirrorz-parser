const tunasync = require("./tunasync");
const isoinfo = require("./isoinfo");

module.exports = async function (siteUrl) {
  const site = await (await fetch(siteUrl)).json();
  const mirrors = await tunasync("https://mirrors.cqu.edu.cn/static/tunasync.json");
  const info = await isoinfo("https://mirrors.cqu.edu.cn/static/isoinfo.json");

  for (const m of mirrors) {
    // cqu has crates.io-index, and it is cname'd to .git
    // but its url is not updated
    if (m.cname === "crates.io-index.git") {
      m.url = '/git/crates.io-index.git'
    } else if (m.cname.includes(".git")) {
      // a hack for cqu, they put .git in /git/xxx.git
      m.url = '/git' + m.url
    }
  }

  return {
    site,
    info,
    mirrors,
  }
};
