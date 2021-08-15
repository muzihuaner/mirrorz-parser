const tunasync = require("./tunasync");
const options = require("./options");
const isoinfo = require("./isoinfo");
const cname = require("./utils").cname;

async function addition(additionUrl, mirrors) {
  const name_func = await cname();
  const data = await (await fetch(additionUrl)).json();

  data.forEach((u) => {
    let exist = false;
    let status = "U";
    if ("inherit" in u && u.inherit !== null) {
      mirrors.forEach((m) => {
        if (m.options_name == u.inherit) {
          exist = true;
          status = m.status;
        }
      });
    } else {
      exist = true;
      if (u.name === "Docker Hub")
        status = "C";
    }

    if (exist) {
      const mirror = {
        cname: name_func(u.name),
        url: "route" in u ? u.route : "/" + u.name,
        status,
      }
      mirrors.push(mirror);
    }
  });

  return mirrors;
}

module.exports = async function () {
  const site = await (await fetch("https://mirrors.nju.edu.cn/.mirrorz/site.json")).json();
  const info = await isoinfo("https://mirror.nju.edu.cn/.mirrorz/iso.json");

  let mirrors = await tunasync("https://mirrors.nju.edu.cn/.mirrorz/tunasync.json");
  mirrors = await addition("https://mirror.nju.edu.cn/.mirrorz/addition.json", mirrors);

  return {
    site,
    info,
    mirrors,
  }
};
