const cname = require("./utils").cname;

module.exports = async function (mirrorz) {
  const name_func = await cname();
  // remove trailing slash in site.url
  mirrorz.site.url = mirrorz.site.url.replace(/\/$/, "");
  for (let mirror of mirrorz.mirrors) {
    // remove trailing slash in mirrors.url
    mirror.url = mirror.url.replace(/\/$/, "");
    // re-apply cname for mirrors.cname
    // (as mirrorz.json directly from mirror sites may not get the latest cname.json)
    mirror.cname = name_func(mirror.cname);
  }
  // re-apply cname for info.distro
  // (as mirrorz.json directly from mirror sites may not get the latest cname.json)
  if ("info" in mirrorz) {
    for (let info of mirrorz.info) {
      info.distro = name_func(info.distro);
    }
  }
  return mirrorz
};
