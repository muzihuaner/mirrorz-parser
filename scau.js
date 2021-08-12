const cname = require("./utils").cname;

const MAP = {
  Synchronized: "S",
  "Synchroniz failure": "F",
  Synchronizing: "Y",
}

const statusConverter = function(time, status) {
  const c = MAP[status];
  if (c === undefined)
    return "U";
  if (time == "-")
    return c;
  const timestamp = new Date(time + " UTC+8")
  const current = new Date()
  if (timestamp < current - 365*24*60*60*1000)
    return c;
  const t = Math.round(timestamp.getTime()/1000).toString();
  return c + t;
};

module.exports = async function (siteUrl) {
  const name_func = await cname();
  const site = await (await fetch(siteUrl)).json();
  const html = await (await fetch("https://r.zenithal.workers.dev/https://mirrors.scau.edu.cn/result")).text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const items = Array.from(doc.querySelectorAll("p"));
  const mirrors = items.map((item) => {
    const name = item.getAttribute("id");
    const url = "/" + name;
    const [status, time] = item.textContent.split(" - ");
    return {
      cname: name,
      url,
      status: statusConverter(time, status)
    }
  });

  return {
    site,
    info: [],
    mirrors,
  }
};
