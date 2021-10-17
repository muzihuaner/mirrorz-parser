const cname = require("./utils").cname;

const human = function(size) {
  const scale = ["MiB", "GiB", "TiB"];
  let i = 0;
  while (size > 1024) {
    size /= 1024;
    i += 1;
  }
  return size.toFixed(2) + scale[i];
}

module.exports = async function (siteUrl) {
  const name_func = await cname();
  const site = await (await fetch(siteUrl)).json();
  const sync = await (await fetch("https://mirrors.sdu.edu.cn/sync.json")).json();
  const isoLinks = await (await fetch("https://mirrors.sdu.edu.cn/static/isoLinks.json")).json();

  const mirrors = [];
  for (const s of sync) {
    // white list as required by sdu
    if (s.name != "ArchLinux" && s.name != "RockyLinux")
      continue
    const mirror = {
      cname: name_func(s.name),
      url: s.url,
      help: s.help_url,
      status: s.last_timestamp == 0 ? "U" : "S" + s.last_timestamp.toString(),
    }
    if (s.size != 0) {
      mirror.size = human(s.size);
    }
    mirrors.push(mirror);
  }

  const info = isoLinks.map((item) => {
    return {
      distro: name_func(item.value),
      category: "os",
      urls: item.children.map((child) => {
        return {
          name: child.label,
          url: child.value,
        }
      }),
    };
  });

  return {
    site,
    info,
    mirrors,
  }
};
