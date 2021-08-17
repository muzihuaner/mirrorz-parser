const ideal_mirror = require("./ideal-mirror");

module.exports = async function (siteUrl) {
  const site = await (await fetch(siteUrl)).json();
  const mirrors = await ideal_mirror("https://mirror.bjtu.edu.cn/status/task_status.json");
  const desc_help = await (await fetch("https://mirror.bjtu.edu.cn/help/desc_help.json")).json();

  for (const d in desc_help) {
    const p = desc_help[d];
    for (const m of mirrors) {
      if (m.cname == d) {
        if ("link" in p)
          m.url = p.link;
        if ("desc" in p)
          m.desc = p.desc;
        if ("help" in p)
          m.help = p.help;
      }
    }
  }

  return {
    site,
    info: [],
    mirrors,
  }
};
