const cname = require("./utils").cname;

const MAP = {
  success: "S",
  syncing: "Y",
  unknown: "U",
  fail: "F",
  failed: "F",
}

module.exports = async function (siteUrl) {
  const name_func = await cname();
  const site = await (await fetch(siteUrl)).json();
  const repo = await (await fetch("https://cors.quickso.cn/?http://mirror.neu.edu.cn/assets/js/repertories.json")).json();

  const mirrors = await Promise.all(repo.map(async (item) => {
    if (item.title == "")
      return null;
    let status = "U";
    if (item.id.startsWith("mirror")) {
      stat = await (await fetch(`https://cors.quickso.cn/?http://mirror.neu.edu.cn/assets/js/repertories/${item.id}.json`)).json();
      status = (MAP[stat.status] ?? "U") + stat.timestamp.toString();
    }
    return {
      cname: name_func(item.title),
      url: item.address,
      status,
    }
  }).filter((e) => e !== null));

  return {
    site,
    info: [],
    mirrors,
  }
};
